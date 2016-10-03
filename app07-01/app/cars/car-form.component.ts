import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Car} from './car';
import {CarService} from './car.service';
import * as _ from 'underscore';

@Component({
  selector: 'car-form',
  templateUrl: 'app/cars/car-form.component.html'
})
export class CarFormComponent {
  submitted = false;
  fuelTypes = ['Petrol', 'Diesel', 'Hybrid', 'Electric'];
  bodyStyles = ['Convertibles', 'Coupes', 'Hatchbacks', 'Vans', 'Sedans', 'Suvs', 'Trucks', 'Wagons'];

  model = new Car(_.uniqueId('car_'), '', '');

  constructor(private _router: Router, private _service: CarService) {}

  onSubmit() {
    this.submitted = true;
    this._service.addCar(this.model);

    setTimeout(() => {
       this._router.navigate(['/cars']);
    }, 2000);
  }

  get diagnostic() { return JSON.stringify(this.model) };
}
