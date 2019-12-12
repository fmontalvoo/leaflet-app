import { Component } from '@angular/core';
import { AddressModel } from './models/address.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leaflet-app';
  private address: AddressModel;

  getAddress(address: AddressModel) {
    this.address = address;
  }
}
