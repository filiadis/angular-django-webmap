import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from './services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [MapService],
})
export class MapComponent implements OnInit {
  public map!: L.Map;

  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.map = L.map('map', { zoomControl: false }).setView([39, 22], 8);

    this.mapService.setMap(this.map); // Set the map instance in the MapService
  }
}
