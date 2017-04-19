import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { ProductEditComponent } from "./product-edit.component";

@Injectable()
export class EditGuard implements CanActivate {
    constructor() { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return window.confirm("Do you want to edit?");
    }
}

@Injectable()
export class SaveAlertGuard implements CanDeactivate<ProductEditComponent> {
    canDeactivate(editComponent: ProductEditComponent){
        if(!editComponent.form.dirty){
            return true;
        }
        return window.confirm("Your Changes will be lost");
    }
}