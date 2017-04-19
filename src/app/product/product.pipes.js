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
var core_1 = require("@angular/core");
var ByYearPipe = (function () {
    function ByYearPipe() {
    }
    ByYearPipe.prototype.transform = function (products, year) {
        console.log("Transform By Year", year);
        if (!products)
            return;
        if (!year)
            return products;
        return products.filter(function (product) { return product.year == year; });
    };
    ByYearPipe = __decorate([
        core_1.Pipe({
            name: "byYear"
        }), 
        __metadata('design:paramtypes', [])
    ], ByYearPipe);
    return ByYearPipe;
}());
exports.ByYearPipe = ByYearPipe;
//# sourceMappingURL=product.pipes.js.map