import { Component } from '@angular/core';

@Component({
  selector: 'app-nf404',
  templateUrl: './nf404.component.html',
  styleUrls: ['./nf404.component.css'],
})
export class Nf404Component {
  ngOnInit() {
    document.body.classList.add('custom-body-class');
  }
}
