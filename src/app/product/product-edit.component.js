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
var router_1 = require("@angular/router");
var interfaces_1 = require("../interfaces");
var product_service_1 = require("./product.service");
var forms_1 = require("@angular/forms");
var ProductEditComponent = (function () {
    function ProductEditComponent(route, productService, router) {
        this.route = route;
        this.productService = productService;
        this.router = router;
        this.product = {};
        this.brands = [];
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params.id;
        console.log('id', id);
        if (id) {
            this.productService.getProduct(id)
                .then(function (product) {
                _this.product = product;
            });
        }
        this.productService.getBrands()
            .then(function (brands) {
            _this.brands = brands;
        });
        this.form.valueChanges.subscribe(function (values) {
            console.log("changes ", values);
        });
    };
    ProductEditComponent.prototype.saveProduct = function () {
        var _this = this;
        if (!this.form.dirty) {
            alert("No Changes Found");
            return;
        }
        this.productService.saveProduct(this.product)
            .then(function (savedProduct) {
            _this.product = savedProduct;
            //Reset form State
            _this.form.reset();
            _this.router.navigate(["/products/list"]);
        });
    };
    __decorate([
        core_1.ViewChild("productForm"), 
        __metadata('design:type', forms_1.NgForm)
    ], ProductEditComponent.prototype, "form", void 0);
    ProductEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'product-edit.component.html',
            styles: [
                "\n            input.ng-dirty{color:blue}\n        "
            ],
            styleUrls: [
                'product-edit.component.css'
            ],
            providers: [
                {
                    provide: interfaces_1.ProductService,
                    useClass: product_service_1.ProductWebService
                }
            ]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, interfaces_1.ProductService, router_1.Router])
    ], ProductEditComponent);
    return ProductEditComponent;
}());
exports.ProductEditComponent = ProductEditComponent;
//# sourceMappingURL=product-edit.component.js.map