import {provideRouter} from '@angular/router';

import {AboutComponent} from './about.component';
import {CarsRoutes} from './cars/cars.routes';

export const routes = [
  ...CarsRoutes,
  {path:'about', component: AboutComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
