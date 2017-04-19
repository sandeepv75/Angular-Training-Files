import { Component, OnInit } from '@angular/core';

import {ProductService} from "../interfaces"

@Component({
    moduleId: module.id,
    selector: 'product-list',
    templateUrl: 'product-list.component.html'
})

export class ProductListComponent implements OnInit {

    products: any [] = [];

    year: any = "";
    //productService: ProductService;
    //Syntatic Sugar
    constructor(private productService: ProductService) {
        //this.productService = productService;
     }

     trackByProduct(index:number, product: any){
         return product.id;
     }

     fetchProducts(){
         //Hardcoded values
        //this.products = this.productService.getProducts();
        
        //From Service        
        //let _this = this;
        this.productService.getProducts()
        /*
        .subscribe (function(products: any[]){
            _this.products = products;
        })
        */
        .subscribe((products: any[])=>{
            this.products = products;
        });
     }

    ngOnInit() { 
        this.fetchProducts();
    }

    //Listener
    likesChangedHandler(likes1: number){
        console.log("likes", likes1);
    }
}