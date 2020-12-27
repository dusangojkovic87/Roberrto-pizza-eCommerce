import { Injectable } from '@angular/core';
import { OrderItem } from '../Models/OrderItem';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products:Product [] = [];


  constructor() { }

  addToCart(product?:Product){
      let cart = localStorage.getItem("products");
      if(cart != null){
        this.products = JSON.parse(cart);
        for(let i = 0;i < this.products.length;i++){
            if(this.products[i].id === product?.id){
               this.products[i].quantity += 1;
            }
            let productsString = JSON.stringify(this.products);
            localStorage.setItem("products",productsString);
        }
      }else{
        if(product != null){
          product.quantity = 1;
          this.products.push(product);
          let productString = JSON.stringify(this.products);
          localStorage.setItem("products",productString);
        }
      }
  }
}
