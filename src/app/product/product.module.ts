import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms'

import {ProductListComponent} from "./product-list.component"
import {ProductLikeWidgetComponent} from "./product-like.component"

import {ByYearPipe} from "./product.pipes"
import { routingModule, components } from "./product.routing";

import { ProductService } from "../interfaces";
import { ProductWebService } from "./product.service";
import { EditGuard, SaveAlertGuard } from "./product.guards";


@NgModule({

    imports:[
        CommonModule,
        HttpModule,
        FormsModule,
        routingModule
    ],

    declarations:[
        components,
        ProductLikeWidgetComponent,
        ByYearPipe
    ],

    exports:[
        ProductListComponent
    ],

    providers: [
        {
            provide: ProductService,
            useClass: ProductWebService
        },
        EditGuard,
        SaveAlertGuard
    ]

})

export class ProductModule{

}