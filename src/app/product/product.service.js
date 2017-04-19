"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
//Inject should be used only for Values
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var interfaces_1 = require("../interfaces");
var ProductWebService = (function (_super) {
    __extends(ProductWebService, _super);
    function ProductWebService(http, apiEndPoint) {
        _super.call(this);
        this.http = http;
        this.apiEndPoint = apiEndPoint;
        console.log("Product Service", apiEndPoint);
    }
    /*
    getProducts(){
        return[
            {name: 'moto',  likes1: 100},
            {name: 'iPhone',  likes1: 300},
        ]
    }
    */
    ProductWebService.prototype.getProducts = function () {
        return this.http
            .get(this.apiEndPoint + "/api/products")
            .map(function (respone) {
            console.log("Response", respone);
            var products = respone.json();
            products.map(function (product) {
                product.likes1 = Math.ceil(Math.random() * 1000);
                product.price = 20 + Math.ceil(Math.random() * 1000);
                product.released = new Date();
            });
            return products;
        });
    };
    //GET /api/products/1
    ProductWebService.prototype.getProduct = function (id) {
        return this.http.get(this.apiEndPoint + "/api/products/" + id)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    //PUT /api/products/1
    //Content-Type: application/json
    //{{data}}
    ProductWebService.prototype.saveProduct = function (product) {
        var headers = new http_1.Headers({
            "Content-Type": "application/json"
        });
        var requestOptions = new http_1.RequestOptions({
            'headers': headers
        });
        var jsonDataText = JSON.stringify(product);
        if (product.id) {
            //PUT /api/products/1
            return this.http.put(this.apiEndPoint + "/api/products/" + product.id, jsonDataText, requestOptions)
                .map(function (response) { return response.json(); })
                .toPromise();
        }
        else {
            //POST /api/products
            return this.http.post(this.apiEndPoint + "/api/products", jsonDataText, requestOptions)
                .map(function (response) { return response.json(); })
                .toPromise();
        }
    };
    ProductWebService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.apiEndPoint + "/api/products/" + id)
            .toPromise();
    };
    ProductWebService.prototype.searchProducts = function (q) {
        return this.http
            .get(this.apiEndPoint + "/api/products?q=" + q)
            .map(function (response) { return response.json(); });
    };
    ProductWebService.prototype.getBrands = function () {
        return this.http.get(this.apiEndPoint + "/api/brands")
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ProductWebService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject("apiEndPoint")), 
        __metadata('design:paramtypes', [http_1.Http, String])
    ], ProductWebService);
    return ProductWebService;
}(interfaces_1.ProductService));
exports.ProductWebService = ProductWebService;
//# sourceMappingURL=product.service.js.map