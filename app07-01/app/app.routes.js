"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require('./about.component');
var cars_routes_1 = require('./cars/cars.routes');
exports.routes = cars_routes_1.CarsRoutes.concat([
    { path: 'about', component: about_component_1.AboutComponent }
]);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map