import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarDetailComponent }    from './car-detail.component';
import { CarFormComponent }  from './car-form.component';
import { CarsListComponent }  from './cars-list.component';

const carsRoutes: Routes = [
  {path:'cars', component: CarsListComponent},
  {path:'car/create', component: CarFormComponent},
  {path:'car/:id', component: CarDetailComponent}
];

export const carsRouting: ModuleWithProviders = RouterModule.forChild(carsRoutes);
