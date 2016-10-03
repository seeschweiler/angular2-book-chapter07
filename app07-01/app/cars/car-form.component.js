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
var car_1 = require('./car');
var car_service_1 = require('./car.service');
var _ = require('underscore');
var CarFormComponent = (function () {
    function CarFormComponent(_router, _service) {
        this._router = _router;
        this._service = _service;
        this.submitted = false;
        this.fuelTypes = ['Petrol', 'Diesel', 'Hybrid', 'Electric'];
        this.bodyStyles = ['Convertibles', 'Coupes', 'Hatchbacks', 'Vans', 'Sedans', 'Suvs', 'Trucks', 'Wagons'];
        this.model = new car_1.Car(_.uniqueId('car_'), '', '');
    }
    CarFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this._service.addCar(this.model);
        setTimeout(function () {
            _this._router.navigate(['/cars']);
        }, 2000);
    };
    Object.defineProperty(CarFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    ;
    CarFormComponent = __decorate([
        core_1.Component({
            selector: 'car-form',
            templateUrl: 'app/cars/car-form.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, car_service_1.CarService])
    ], CarFormComponent);
    return CarFormComponent;
}());
exports.CarFormComponent = CarFormComponent;
//# sourceMappingURL=car-form.component.js.map