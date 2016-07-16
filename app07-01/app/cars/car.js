"use strict";
var Car = (function () {
    function Car(id, brand, model, fuelType, bodyStyle, topSpeed, power) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.fuelType = fuelType;
        this.bodyStyle = bodyStyle;
        this.topSpeed = topSpeed;
        this.power = power;
    }
    return Car;
}());
exports.Car = Car;
//# sourceMappingURL=car.js.map