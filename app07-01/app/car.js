System.register([], function(exports_1) {
    var Car;
    return {
        setters:[],
        execute: function() {
            Car = (function () {
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
            })();
            exports_1("Car", Car);
        }
    }
});
//# sourceMappingURL=car.js.map