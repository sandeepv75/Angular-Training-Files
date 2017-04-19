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
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var product_list_component_1 = require("./product-list.component");
var product_like_component_1 = require("./product-like.component");
var product_pipes_1 = require("./product.pipes");
var product_routing_1 = require("./product.routing");
var interfaces_1 = require("../interfaces");
var product_service_1 = require("./product.service");
var product_guards_1 = require("./product.guards");
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                product_routing_1.routingModule
            ],
            declarations: [
                product_routing_1.components,
                product_like_component_1.ProductLikeWidgetComponent,
                product_pipes_1.ByYearPipe
            ],
            exports: [
                product_list_component_1.ProductListComponent
            ],
            providers: [
                {
                    provide: interfaces_1.ProductService,
                    useClass: product_service_1.ProductWebService
                },
                product_guards_1.EditGuard,
                product_guards_1.SaveAlertGuard
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map