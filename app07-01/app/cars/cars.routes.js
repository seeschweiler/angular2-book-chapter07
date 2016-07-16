"use strict";
var cars_list_component_1 = require('./cars-list.component');
var car_form_component_1 = require('./car-form.component');
var car_detail_component_1 = require('./car-detail.component');
exports.CarsRoutes = [
    { path: '', component: cars_list_component_1.CarsListComponent },
    { path: 'car/create', component: car_form_component_1.CarFormComponent },
    { path: 'car/:id', component: car_detail_component_1.CarDetailComponent }
];
//# sourceMappingURL=cars.routes.js.map