System.register(['angular2/core', 'angular2/router', './cars-list.component', './car-detail.component', './car-form.component', './about.component', './car.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, cars_list_component_1, car_detail_component_1, car_form_component_1, about_component_1, car_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (cars_list_component_1_1) {
                cars_list_component_1 = cars_list_component_1_1;
            },
            function (car_detail_component_1_1) {
                car_detail_component_1 = car_detail_component_1_1;
            },
            function (car_form_component_1_1) {
                car_form_component_1 = car_form_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (car_service_1_1) {
                car_service_1 = car_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Routing and Navigation</h3>\n      </div>\n      <div class=\"panel-body\">\n        <ul class=\"nav nav-tabs\">\n          <li role=\"presentation\"><a [routerLink]=\"['CarsList']\">Cars List</a></li>\n          <li role=\"presentation\"><a [routerLink]=\"['CarForm']\">New Car</a></li>\n          <li role=\"presentation\"><a [routerLink]=\"['About']\">About</a></li>\n        </ul>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  ",
                        providers: [car_service_1.CarService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/cars', name: 'CarsList', component: cars_list_component_1.CarsListComponent, useAsDefault: true },
                        { path: '/car/create', name: 'CarForm', component: car_form_component_1.CarFormComponent },
                        { path: '/car/:id', name: 'CarDetail', component: car_detail_component_1.CarDetailComponent },
                        { path: '/about', name: 'About', component: about_component_1.AboutComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map