"use strict";
var router_1 = require("@angular/router");
var product_list_component_1 = require("./product-list.component");
var product_edit_component_1 = require("./product-edit.component");
var product_home_component_1 = require("./product-home.component");
var product_guards_1 = require("./product.guards");
var routes = [
    {
        path: "products",
        component: product_home_component_1.ProductHomeComponent,
        children: [
            {
                path: 'list',
                component: product_list_component_1.ProductListComponent
            },
            {
                path: 'edit/:id',
                component: product_edit_component_1.ProductEditComponent,
                canActivate: [product_guards_1.EditGuard],
                canDeactivate: [product_guards_1.SaveAlertGuard]
            },
            {
                path: 'create',
                component: product_edit_component_1.ProductEditComponent
            }
        ]
    }
];
//Prevents importing all components one at a time
exports.components = [
    product_edit_component_1.ProductEditComponent,
    product_list_component_1.ProductListComponent,
    product_home_component_1.ProductHomeComponent
];
exports.routingModule = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=product.routing.js.map