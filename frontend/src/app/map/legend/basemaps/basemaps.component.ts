import { Component, OnInit } from '@angular/core';
import L from 'leaflet';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-basemaps',
  templateUrl: './basemaps.component.html',
  styleUrls: ['./basemaps.component.css', '../legend.component.css'],
})
export class BasemapsComponent implements OnInit {
  basemaps = [
    'Open Street Map',
    'Google Streets',
    'Google Hybrid',
    'Google Satelite',
    'Esri_WorldGrayCanvas',
    'CartoDB_DarkMatter',
    'Κανένα',
  ];
  selectedBasemap: string = this.basemaps[0];

  hideBasemaps: boolean = true;

  //Set the basemap variables
  openStreetMap = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '© OpenStreetMap contributors',
    }
  );

  googleStreets = L.tileLayer(
    'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
    {
      maxZoom: 20,
      zIndex: 10,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    }
  );

  googleHybrid = L.tileLayer(
    'http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
    {
      maxZoom: 20,
      zIndex: 10,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    }
  );

  googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    zIndex: 10,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  });

  Esri_WorldGrayCanvas = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
      zIndex: 10,
      maxZoom: 16,
    }
  );

  CartoDB_DarkMatter = L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      zIndex: 10,
      maxZoom: 20,
    }
  );

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    const map: L.Map = this.mapService.getMap();
    this.openStreetMap.addTo(map);
  }

  removeAllmaps() {
    const map: L.Map = this.mapService.getMap();

    map.removeLayer(this.openStreetMap);
    map.removeLayer(this.googleStreets);
    map.removeLayer(this.googleHybrid);
    map.removeLayer(this.googleSat);
    map.removeLayer(this.Esri_WorldGrayCanvas);
    map.removeLayer(this.CartoDB_DarkMatter);
  }

  onBasemapChange() {
    const map: L.Map = this.mapService.getMap();

    if (this.selectedBasemap == this.basemaps[0]) {
      this.removeAllmaps();
      this.openStreetMap.addTo(map);
    } else if (this.selectedBasemap == this.basemaps[1]) {
      this.removeAllmaps();
      this.googleStreets.addTo(map);
    } else if (this.selectedBasemap == this.basemaps[2]) {
      this.removeAllmaps();
      this.googleHybrid.addTo(map);
    } else if (this.selectedBasemap == this.basemaps[3]) {
      this.removeAllmaps();
      this.googleSat.addTo(map);
    } else if (this.selectedBasemap == this.basemaps[4]) {
      this.removeAllmaps();
      this.Esri_WorldGrayCanvas.addTo(map);
    } else if (this.selectedBasemap == this.basemaps[5]) {
      this.removeAllmaps();
      this.CartoDB_DarkMatter.addTo(map);
    } else if (this.selectedBasemap == this.basemaps[6]) {
      this.removeAllmaps();
    }
  }

  toggleBasemaps() {
    this.hideBasemaps = !this.hideBasemaps;
  }
}
