import {RouterConfig} from '@angular/router';
import {CarsListComponent} from './cars-list.component';
import {CarFormComponent} from './car-form.component';
import {CarDetailComponent} from './car-detail.component';

export const CarsRoutes: RouterConfig = [
  {path:'', component: CarsListComponent},
  {path:'car/create', component: CarFormComponent},
  {path:'car/:id', component: CarDetailComponent}
]
