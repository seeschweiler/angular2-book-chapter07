"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require('./about.component');
var appRoutes = [
    { path: '', redirectTo: '/cars', pathMatch: 'full' },
    { path: 'about', component: about_component_1.AboutComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map