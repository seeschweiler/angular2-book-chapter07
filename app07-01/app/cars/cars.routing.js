"use strict";
var router_1 = require('@angular/router');
var car_detail_component_1 = require('./car-detail.component');
var car_form_component_1 = require('./car-form.component');
var cars_list_component_1 = require('./cars-list.component');
var carsRoutes = [
    { path: 'cars', component: cars_list_component_1.CarsListComponent },
    { path: 'car/create', component: car_form_component_1.CarFormComponent },
    { path: 'car/:id', component: car_detail_component_1.CarDetailComponent }
];
exports.carsRouting = router_1.RouterModule.forChild(carsRoutes);
//# sourceMappingURL=cars.routing.js.map