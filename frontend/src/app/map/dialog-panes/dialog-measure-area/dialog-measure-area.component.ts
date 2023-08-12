import { Component, OnInit } from '@angular/core';

import { MapService } from '../../services/map.service';
import L from 'leaflet';
import GeometryUtil from 'leaflet-geometryutil';
import * as turf from '@turf/turf';
import { MeasureAreaService } from '../../services/dialog-panes/measure-area.service';

@Component({
  selector: 'app-dialog-measure-area',
  templateUrl: './dialog-measure-area.component.html',
  styleUrls: [
    './dialog-measure-area.component.css',
    '../dialog-panes.component.css',
  ],
})
export class DialogMeasureAreaComponent implements OnInit {
  measureAreaState: boolean = false;

  areaMarkerGroup = L.layerGroup();

  areaPolygonGroup = L.featureGroup();

  points: any = [];

  sq_meters: number = 0;

  stremmata: number = 0;

  ha: number = 0;

  sq_km: number = 0;

  constructor(private ma: MeasureAreaService, private mapService: MapService) {}

  ngOnInit() {
    this.ma.measureAreaPane$.subscribe((value) => {
      this.measureAreaState = value;
    });
    const map: L.Map = this.mapService.getMap();
    map.on('click', this.measureArea.bind(this));

    this.areaMarkerGroup.addTo(map);

    this.areaPolygonGroup.addTo(map);
  }

  measureArea(e: L.LeafletMouseEvent) {
    const map: L.Map = this.mapService.getMap();

    //Set icon
    let dotIcon = L.icon({
      iconUrl: '../../../../assets/icons/dot.png',
      iconSize: [40, 40],
    });
    if (this.measureAreaState) {
      let foo: any = e.latlng;

      this.points.push(foo);

      L.marker(foo, { icon: dotIcon }).addTo(this.areaMarkerGroup);

      if (this.points.length > 1) {
        // create the polygon using the L.polygon() method

        this.areaPolygonGroup.clearLayers();

        let poly = L.polygon(this.points, { color: 'red' });

        poly.addTo(this.areaPolygonGroup);

        const polygonLayer = this.areaPolygonGroup.getLayers()[0] as L.Polygon;
        const latlngsArray = (polygonLayer.getLatLngs() as L.LatLng[][])[0];

        // Convert Leaflet LatLng objects to Turf coordinate format
        const turfCoords = latlngsArray.map((latLng: L.LatLng) => [
          latLng.lng,
          latLng.lat,
        ]);

        // Add the first coordinate to the end to close the polygon
        turfCoords.push([...turfCoords[0]]);

        // Create a Turf polygon from the coordinates
        const turfPolygon = turf.polygon([turfCoords]);

        // Calculate the area using Turf
        const areaInSquareMeters = turf.area(turfPolygon);

        this.sq_meters = areaInSquareMeters;

        this.stremmata = areaInSquareMeters / 1000;

        this.ha = areaInSquareMeters / 10000;

        this.sq_km = areaInSquareMeters / 1000000;
      }
    }
  }

  clearMeasureArea() {
    this.areaMarkerGroup.clearLayers();

    this.areaPolygonGroup.clearLayers();

    this.sq_meters = 0;

    this.stremmata = 0;

    this.ha = 0;

    this.sq_km = 0;

    this.points = [];
  }

  closeMeasureArea() {
    const newValue = !this.ma.getMeasureAreaPane();
    this.ma.setMeasureAreaPane(newValue);
    this.clearMeasureArea();
  }
}
