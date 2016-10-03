import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Car} from './car';
import {CarService} from './car.service';

@Component({
  template: `
      <h3>Car Detail Component</h3>
      <div *ngIf="currentCar">
        <table class="table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ID</td>
              <td>{{currentCar.id}}</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>{{currentCar.brand}}</td>
            </tr>
            <tr>
              <td>Model</td>
              <td>{{currentCar.model}}</td>
            </tr>
            <tr>
              <td>Fuel Type</td>
              <td>{{currentCar.fuelType}}</td>
            </tr>
            <tr>
              <td>Body Style</td>
              <td>{{currentCar.bodyStyle}}</td>
            </tr>
            <tr>
              <td>Top Speed</td>
              <td>{{currentCar.topSpeed}}</td>
            </tr>
            <tr>
              <td>Power</td>
              <td>{{currentCar.power}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <a class="btn btn-primary btn-sm" routerLink="/cars">Back to List</a>
    `
})
export class CarDetailComponent {
  currentCar: Car;
  private sub: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _service: CarService){}

    ngOnInit() {
      this.sub = this._route.params.subscribe(params => {
        let id = params['id'];
        this._service.getCar(id).then(currentCar => this.currentCar = currentCar);
      });
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }
}
