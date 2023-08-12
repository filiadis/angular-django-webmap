import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map!: L.Map;

  constructor() {}

  setMap(map: L.Map): void {
    this.map = map;
  }

  // Method to get the map instance
  getMap(): L.Map {
    return this.map;
  }
}
