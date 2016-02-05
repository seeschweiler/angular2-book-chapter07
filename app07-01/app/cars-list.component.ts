import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import {Car} from './car';
import {CarService} from './car.service';

@Component({
  template: `
      <h3>Car List Component</h3>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="#car of cars" (click)="onSelect(car)">
            <td>{{car.id}}</td>
            <td>{{car.brand}}</td>
            <td>{{car.model}}</td>
          </tr>
        </tbody>
      </table>
    `
})
export class CarsListComponent {
  cars: Car[];
  
  constructor(private _router: Router, private _service: CarService) {}
  
  ngOnInit() {
    this._service.getCars().then(cars => this.cars = cars);
  }
  
  onSelect(car: Car) {
    this._router.navigate( ['CarDetail', { id: car.id }] );
  }
}