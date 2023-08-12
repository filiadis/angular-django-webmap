import { Component } from '@angular/core';

@Component({
  selector: 'app-layers',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.css', '../legend.component.css'],
})
export class LayersComponent {
  admin: boolean = false;
  ipodomes: boolean = false;
  perivallon: boolean = false;
  poleodomika: boolean = false;
  toggleAdmin() {
    this.admin = !this.admin;
  }
  toggleIpodomes() {
    this.ipodomes = !this.ipodomes;
  }
  togglePerivallon() {
    this.perivallon = !this.perivallon;
  }
  togglePoleodomika() {
    this.poleodomika = !this.poleodomika;
  }
}
