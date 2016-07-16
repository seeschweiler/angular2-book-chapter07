import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {CarService} from './cars/car.service';

import {CarsListComponent} from './cars/cars-list.component';
import {CarFormComponent} from './cars/car-form.component';
import {CarDetailComponent} from './cars/car-detail.component';
import {AboutComponent} from './about.component';

@Component({
  selector: 'my-app',
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Routing and Navigation</h3>
      </div>
      <div class="panel-body">
        <ul class="nav nav-tabs">
          <li role="presentation"><a [routerLink]="['/']">Cars List</a></li>
          <li role="presentation"><a [routerLink]="['/car/create']">New Car</a></li>
          <li role="presentation"><a [routerLink]="['/about']">About</a></li>
        </ul>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  providers: [CarService],
  directives: [ROUTER_DIRECTIVES],
  precompile: [CarsListComponent, AboutComponent, CarDetailComponent, CarFormComponent]
})
export class AppComponent { }
