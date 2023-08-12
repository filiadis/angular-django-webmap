import { Component, OnInit } from '@angular/core';
import L from 'leaflet';
import { MapService } from '../../services/map.service';
import { LayerInfoService } from '../../services/layer-info.service';
import { FeatureIntersectionService } from '../../services/dialog-panes/feature-intersection.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dialog-feature-intersection',
  templateUrl: './dialog-feature-intersection.component.html',
  styleUrls: [
    './dialog-feature-intersection.component.css',
    '../dialog-panes.component.css',
  ],
})
export class DialogFeatureIntersectionComponent implements OnInit {
  featureIntersectionState: boolean = false;

  featIntMarkerGroup = L.layerGroup();

  featIntPolygonGroup = L.featureGroup();

  points: any = [];
  sendInfo: any = [];
  serverResponse: { [key: string]: any } = {};
  layerProps: any;
  activeLayerNames: string[] = [];
  loading: boolean = false;
  errorMessage: string = '';

  constructor(
    private featureIntersection: FeatureIntersectionService,
    private mapService: MapService,
    private http: HttpClient,
    private layerInfoService: LayerInfoService
  ) {
    this.layerProps = this.layerInfoService.getLayerProps();
  }

  ngOnInit() {
    this.featureIntersection.featureIntersectionPane$.subscribe((value) => {
      this.featureIntersectionState = value;
    });
    const map: L.Map = this.mapService.getMap();
    map.on('click', this.selectIntArea.bind(this));

    this.featIntMarkerGroup.addTo(map);

    this.featIntPolygonGroup.addTo(map);
  }

  selectIntArea(e: L.LeafletMouseEvent) {
    const map: L.Map = this.mapService.getMap();

    //Set icon
    let dotIcon = L.icon({
      iconUrl: '../../../../assets/icons/dot.png',
      iconSize: [40, 40],
    });
    if (this.featureIntersectionState) {
      let lat = e.latlng.lat;

      let lng = e.latlng.lng;

      this.sendInfo.push(lng);
      this.sendInfo.push(lat);
      let foo: any = e.latlng;

      this.points.push(foo);

      L.marker(foo, { icon: dotIcon }).addTo(this.featIntMarkerGroup);

      if (this.points.length > 1) {
        // create the polygon using the L.polygon() method

        this.featIntPolygonGroup.clearLayers();

        let poly = L.polygon(this.points, { color: 'yellow' });

        poly.addTo(this.featIntPolygonGroup);
      }
    }
  }
  intersectionRequest() {
    this.serverResponse = {};
    if (this.points.length <= 2) {
      this.errorMessage = 'Εισάγεται πάνω από 2 σημεία';
      return;
    }
    if (this.points.length > 2 && this.featureIntersectionState) {
      this.errorMessage = '';
      this.loading = true; // Set loading to true at the start of the request

      this.http
        .get(`${environment.apiUrl}api/intersectionInfo/${this.sendInfo}/`)
        .subscribe({
          next: (response: any) => {
            this.serverResponse = response;
            console.log(this.serverResponse);

            for (let key in this.layerProps) {
              if (this.layerProps.hasOwnProperty(key)) {
                this.activeLayerNames.push(this.layerProps[key].name);
              }
            }
            this.loading = false; // Set loading to false when the request is completed
          },
          error: (error) => {
            console.error(error);
            this.loading = false; // Also set loading to false if the request fails
          },
        });
    }
  }

  clearOutput() {
    this.serverResponse = {};
    this.points = [];
    this.sendInfo = [];
    this.featIntPolygonGroup.clearLayers();
    this.featIntMarkerGroup.clearLayers();
    this.errorMessage = '';
  }

  closefeatureIntersection() {
    const newValue = !this.featureIntersection.getFeatureIntersectionPane;
    this.featureIntersection.setFeatureIntersectionPane(newValue);
    this.serverResponse = {};
    this.points = [];
    this.sendInfo = [];
    this.featIntPolygonGroup.clearLayers();
    this.featIntMarkerGroup.clearLayers();
    this.errorMessage = '';
  }
}
