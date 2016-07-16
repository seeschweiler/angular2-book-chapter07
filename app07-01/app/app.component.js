"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var car_service_1 = require('./cars/car.service');
var cars_list_component_1 = require('./cars/cars-list.component');
var car_form_component_1 = require('./cars/car-form.component');
var car_detail_component_1 = require('./cars/car-detail.component');
var about_component_1 = require('./about.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Routing and Navigation</h3>\n      </div>\n      <div class=\"panel-body\">\n        <ul class=\"nav nav-tabs\">\n          <li role=\"presentation\"><a [routerLink]=\"['/']\">Cars List</a></li>\n          <li role=\"presentation\"><a [routerLink]=\"['/car/create']\">New Car</a></li>\n          <li role=\"presentation\"><a [routerLink]=\"['/about']\">About</a></li>\n        </ul>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  ",
            providers: [car_service_1.CarService],
            directives: [router_1.ROUTER_DIRECTIVES],
            precompile: [cars_list_component_1.CarsListComponent, about_component_1.AboutComponent, car_detail_component_1.CarDetailComponent, car_form_component_1.CarFormComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map