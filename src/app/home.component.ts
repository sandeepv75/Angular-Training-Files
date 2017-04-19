import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    constructor() { 
        console.log("home page constructor");
    }

    ngOnInit() { 
        console.log("home page init");
    }
}