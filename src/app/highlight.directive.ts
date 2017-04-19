import { Directive, OnInit, ElementRef, Renderer } from '@angular/core';

@Directive({ selector: '[highlight]' })
export class HighlightDirective implements OnInit{
    constructor(private elementRef: ElementRef, private renderer: Renderer) { 
        console.log("Directive Highlight Created");
    }

    ngOnInit(){
        this.setColor("green");
    }

    setColor(color:string){
        this.renderer.setElementStyle(this.elementRef.nativeElement, "background", color)
    }
}