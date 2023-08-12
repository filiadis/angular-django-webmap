import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';
import { LayerInfoService } from '../../services/layer-info.service';
import L from 'leaflet';
import { FeatureInfoService } from '../../services/dialog-panes/feature-info.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dialog-feature-info',
  templateUrl: './dialog-feature-info.component.html',
  styleUrls: [
    './dialog-feature-info.component.css',
    '../dialog-panes.component.css',
  ],
})
export class DialogFeatureInfoComponent implements OnInit {
  featureInfoState: boolean = false;
  activeLayerNames: string[] = [];
  loading: boolean = false;
  serverResponse: { [key: string]: any } = {};
  layerProps: any;

  constructor(
    private featureInfo: FeatureInfoService,
    private mapService: MapService,
    private http: HttpClient,
    private layerInfoService: LayerInfoService
  ) {
    this.layerProps = this.layerInfoService.getLayerProps();
  }

  ngOnInit() {
    this.featureInfo.featureInfoPane$.subscribe((value) => {
      this.featureInfoState = value;
    });
    const map: L.Map = this.mapService.getMap();
    map.on('click', this.apiRequest.bind(this));
  }
  closeFeatureInfo() {
    const newValue = !this.featureInfo.getFeatureInfoPane;
    this.featureInfo.setFeatureInfoPane(newValue);
    this.serverResponse = {};
  }

  activeLayers() {
    const map: L.Map = this.mapService.getMap();
    let visibleLayerNames: string[] = [];

    map.eachLayer((layer) => {
      if (layer instanceof L.TileLayer.WMS && layer.options.layers) {
        // Check if the layer is a WMS layer and layers is defined
        visibleLayerNames.push(layer.options.layers); // Push the layer name to the array
      }
    });

    return visibleLayerNames;
  }

  apiRequest(e: L.LeafletMouseEvent) {
    this.serverResponse = {};
    const map: L.Map = this.mapService.getMap();

    if (this.featureInfoState) {
      this.loading = true;

      let lat = e.latlng.lat;

      let lng = e.latlng.lng;

      let coords = [lat, lng];

      let layersInfo = this.activeLayers();

      let sendInfo = `[[${coords}],${JSON.stringify(layersInfo)}]`;

      const layerProps = this.layerInfoService.getLayerProps();

      this.activeLayerNames = [];

      this.http
        .get(`${environment.apiUrl}api/featureInfo/${sendInfo}/`)
        .subscribe({
          next: (response: any) => {
            this.serverResponse = response;

            for (let key in layerProps) {
              if (layerProps.hasOwnProperty(key) && layersInfo.includes(key)) {
                this.activeLayerNames.push(layerProps[key].name);
              }
            }
            this.loading = false;
          },
          error: (error) => {
            console.error(error);
            this.loading = false;
          },
        });
    }
  }
}
