import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Routing and Navigation</h3>
      </div>
      <div class="panel-body">
        <ul class="nav nav-tabs">
          <li role="presentation"><a routerLink="/cars">Cars List</a></li>
          <li role="presentation"><a routerLink="/car/create">New Car</a></li>
          <li role="presentation"><a routerLink="/about">About</a></li>
        </ul>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent { }
