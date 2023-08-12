import { Component, OnInit } from '@angular/core';

import L from 'leaflet';
import { MapService } from '../../services/map.service';
import { MeasureLineService } from '../../services/dialog-panes/measure-line.service';

@Component({
  selector: 'app-dialog-measure-line',
  templateUrl: './dialog-measure-line.component.html',
  styleUrls: [
    './dialog-measure-line.component.css',
    '../dialog-panes.component.css',
  ],
})
export class DialogMeasureLineComponent implements OnInit {
  measureLineState: boolean = false;

  markerGroup = L.layerGroup();

  polyLineGroup = L.featureGroup();

  points: any = [];

  meters: number = 0;

  km: number = 0;

  constructor(
    private mapService: MapService,
    private measureLine: MeasureLineService
  ) {}

  ngOnInit() {
    this.measureLine.measureLinePane$.subscribe((value) => {
      this.measureLineState = value;
    });
    const map: L.Map = this.mapService.getMap();
    map.on('click', this.measureLength.bind(this));

    this.markerGroup.addTo(map);

    this.polyLineGroup.addTo(map);
  }

  measureLength(e: L.LeafletMouseEvent) {
    //Set icon
    let dotIcon = L.icon({
      iconUrl: '../../../../assets/icons/dot.png',
      iconSize: [40, 40],
    });

    if (this.measureLineState) {
      let foo: any = e.latlng;

      this.points.push(foo);

      L.marker(foo, { icon: dotIcon }).addTo(this.markerGroup);

      if (this.points.length > 1) {
        L.polyline([this.points.slice(-2), this.points.slice(-1)], {
          color: 'orange',
        }).addTo(this.polyLineGroup);

        var sum = 0;

        for (let i = 0; i < this.points.length - 1; i++) {
          sum += this.points[i].distanceTo(this.points[i + 1]);
        }

        this.meters = sum;

        this.km = sum / 1000;
      }
    }
  }

  clearMeasureLine() {
    this.markerGroup.clearLayers();

    this.polyLineGroup.clearLayers();

    this.meters = 0;

    this.km = 0;

    this.points = [];
  }

  closeMeasureLine() {
    const newValue = !this.measureLine.getMeasureLinePane();
    this.measureLine.setMeasureLinePane(newValue);
    this.clearMeasureLine();
  }
}
