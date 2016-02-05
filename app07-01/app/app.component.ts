import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CarsListComponent} from './cars-list.component';
import {CarDetailComponent} from './car-detail.component';
import {CarFormComponent} from './car-form.component';
import {AboutComponent} from './about.component';

import {CarService} from './car.service';

@Component({
  selector: 'my-app',
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Routing and Navigation</h3>
      </div>
      <div class="panel-body">
        <ul class="nav nav-tabs">
          <li role="presentation"><a [routerLink]="['CarsList']">Cars List</a></li>
          <li role="presentation"><a [routerLink]="['CarForm']">New Car</a></li>
          <li role="presentation"><a [routerLink]="['About']">About</a></li>
        </ul>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  providers: [CarService],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/cars', name:'CarsList', component: CarsListComponent, useAsDefault: true},
  {path:'/car/create', name:'CarForm', component: CarFormComponent},
  {path:'/car/:id', name:'CarDetail', component: CarDetailComponent},
  {path:'/about', name:'About', component: AboutComponent}
])
export class AppComponent {

}
