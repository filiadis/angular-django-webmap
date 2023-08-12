import { Component, Input, OnInit } from '@angular/core';
import L, { Layer } from 'leaflet';
import { MapService } from 'src/app/map/services/map.service';
import { LayerInfoService } from 'src/app/map/services/layer-info.service';

@Component({
  selector: 'app-layer-item',
  templateUrl: './layer-item.component.html',
  styleUrls: ['./layer-item.component.css', '../../legend.component.css'],
})
export class LayerItemComponent implements OnInit {
  layer: Layer | null = null;
  legendInfo: boolean = false;

  @Input() labelName: string = '';
  @Input() wmsName: string = '';

  constructor(
    private mapService: MapService,
    private layerInfoService: LayerInfoService
  ) {}
  ngOnInit(): void {
    const layerProps = this.layerInfoService.getLayerProps();

    this.labelName = layerProps[this.labelName].name;
  }

  toggleLayer($event: any) {
    const map: L.Map = this.mapService.getMap();
    if ($event.target.checked) {
      this.layer = L.tileLayer
        .wms('http://89.116.30.55:8090/geoserver/supco/wms', {
          layers: this.wmsName,
          zIndex: 50,
          format: 'image/png',
          transparent: true,
        })
        .addTo(map);
    } else {
      if (this.layer) {
        map.removeLayer(this.layer);
        this.layer = null;
      }
    }
  }

  toggleLegendInfo() {
    this.legendInfo = !this.legendInfo;
  }
}
