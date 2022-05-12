import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICart } from '../Models/icart';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems:ICart[] = [];
  productList = new BehaviorSubject<any>([]);
  constructor() { }

  GetCartItems()
  {
    return this.productList.asObservable();
  }
  AddToCart(count:number,product:Iproduct)
  {
    let cart:ICart = {} as ICart;
    cart.id = product.id;
    cart.name = product.name;
    cart.description = product.description;
    cart.photo = product.photo;
    cart.price = product.price;
    cart.quantity = count;
    cart.currentQuntity = product.quantity;
    cart.purchaseDate = product.purchaseDate;
    cart.totalPrice = product.price * count;
    this.cartItems.push(cart);
    this.productList.next(this.cartItems);
    console.log(this.cartItems);
  }
  GetTotalPrice():number
  {
    let totalPrice = 0;
    this.cartItems.map((product)=>{
      totalPrice +=product.totalPrice;
    })
    return totalPrice;
  }

  RemoveItem(item:Iproduct)
  {
    this.cartItems.map((product,index)=>{
      if(item.id === product.id)
      {
        this.cartItems.splice(index,1);
      }
    })
    this.productList.next(this.cartItems);
  }
  RemoveAll()
  {
    this.cartItems =[];
    this.productList.next(this.cartItems);
  }
}
