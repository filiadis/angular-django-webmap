import { AfterViewInit, Component } from '@angular/core';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-go-home-btn',
  templateUrl: './go-home-btn.component.html',
  styleUrls: ['../toolbar.component.css'],
})
export class GoHomeBtnComponent implements AfterViewInit {
  constructor(private mapService: MapService) {}

  ngAfterViewInit() {
    const map: L.Map = this.mapService.getMap();
  }
  goHome() {
    const map: L.Map = this.mapService.getMap();
    map.setView([39, 22], 8);
  }
}
