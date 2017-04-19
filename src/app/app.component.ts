import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'product-app',
    templateUrl: "app.component.html"
})

export class AppComponent {
    title: string = "Product App";

    aboutTitle: string = "About from App";

    getTitle(title:string){
        return `${title} from App`
    }
}