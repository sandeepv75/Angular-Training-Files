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
var ProductLikeWidgetComponent = (function () {
    function ProductLikeWidgetComponent() {
        //Two way binding - inputparamname + "Change"
        this.likes1Change = new core_1.EventEmitter;
        this.likesChanged = new core_1.EventEmitter;
    }
    ProductLikeWidgetComponent.prototype.ngOnInit = function () { };
    ProductLikeWidgetComponent.prototype.incr = function (event) {
        console.log(event);
        this.likes1++;
        this.likesChanged.emit(this.likes1);
        this.likes1Change.emit(this.likes1);
    };
    ProductLikeWidgetComponent.prototype.decr = function () {
        this.likes1--;
        this.likesChanged.emit(this.likes1);
        this.likes1Change.emit(this.likes1);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ProductLikeWidgetComponent.prototype, "likes1", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ProductLikeWidgetComponent.prototype, "likes1Change", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ProductLikeWidgetComponent.prototype, "likesChanged", void 0);
    ProductLikeWidgetComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'like-widget',
            template: "\n        <h4>Likes {{likes1}}</h4>\n        <button (click)=\"incr($event)\">+1</button>\n        <button (click)=\"decr()\">-1</button>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ProductLikeWidgetComponent);
    return ProductLikeWidgetComponent;
}());
exports.ProductLikeWidgetComponent = ProductLikeWidgetComponent;
//# sourceMappingURL=product-like.component.js.map