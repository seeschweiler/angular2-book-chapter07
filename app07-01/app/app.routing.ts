import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full'},
  { path: 'about', component: AboutComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
