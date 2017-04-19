import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'like-widget',
    template: `
        <h4>Likes {{likes1}}</h4>
        <button (click)="incr($event)">+1</button>
        <button (click)="decr()">-1</button>
    `
})

export class ProductLikeWidgetComponent implements OnInit {
    @Input()
    likes1: number;

    //Two way binding - inputparamname + "Change"
    @Output()
    likes1Change: EventEmitter<number> = new EventEmitter

    @Output()
    likesChanged: EventEmitter<number> = new EventEmitter



    constructor() { }

    ngOnInit() { }

    incr(event:Event){
        console.log(event)
        this.likes1++;
        this.likesChanged.emit(this.likes1)
        this.likes1Change.emit(this.likes1)
    }

    decr(){
        this.likes1--;
        this.likesChanged.emit(this.likes1)
        this.likes1Change.emit(this.likes1)
    }
}