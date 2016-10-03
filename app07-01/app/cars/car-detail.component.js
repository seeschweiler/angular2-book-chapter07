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
var car_service_1 = require('./car.service');
var CarDetailComponent = (function () {
    function CarDetailComponent(_route, _router, _service) {
        this._route = _route;
        this._router = _router;
        this._service = _service;
    }
    CarDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = params['id'];
            _this._service.getCar(id).then(function (currentCar) { return _this.currentCar = currentCar; });
        });
    };
    CarDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CarDetailComponent = __decorate([
        core_1.Component({
            template: "\n      <h3>Car Detail Component</h3>\n      <div *ngIf=\"currentCar\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Property</th>\n              <th>Value</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>ID</td>\n              <td>{{currentCar.id}}</td>\n            </tr>\n            <tr>\n              <td>Brand</td>\n              <td>{{currentCar.brand}}</td>\n            </tr>\n            <tr>\n              <td>Model</td>\n              <td>{{currentCar.model}}</td>\n            </tr>\n            <tr>\n              <td>Fuel Type</td>\n              <td>{{currentCar.fuelType}}</td>\n            </tr>\n            <tr>\n              <td>Body Style</td>\n              <td>{{currentCar.bodyStyle}}</td>\n            </tr>\n            <tr>\n              <td>Top Speed</td>\n              <td>{{currentCar.topSpeed}}</td>\n            </tr>\n            <tr>\n              <td>Power</td>\n              <td>{{currentCar.power}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <a class=\"btn btn-primary btn-sm\" routerLink=\"/cars\">Back to List</a>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, car_service_1.CarService])
    ], CarDetailComponent);
    return CarDetailComponent;
}());
exports.CarDetailComponent = CarDetailComponent;
//# sourceMappingURL=car-detail.component.js.map