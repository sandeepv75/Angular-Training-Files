import {NgModule} from "@angular/core";

import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component"
import {HomeComponent} from "./home.component"
import {AboutComponent} from "./about.component"

import {ProductModule} from "./product/product.module"

import { routingModule } from "./app.routing";
import * as config from "./app.config";

import { HighlightDirective } from "./highlight.directive";


@NgModule({
    imports:[
        BrowserModule,
        ProductModule,
        routingModule
    ],

    declarations:[
        AppComponent,
        HomeComponent,
        AboutComponent,
        HighlightDirective
    ],

    bootstrap:[
        AppComponent
    ],

    providers: [
        {
            provide: "apiEndPoint",
            useValue: config.API_END_POINT
        }        
    ]
})

export class AppModule{

}