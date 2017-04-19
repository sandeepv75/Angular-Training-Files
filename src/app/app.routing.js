"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.routingModule = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map