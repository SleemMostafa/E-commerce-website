import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import { ICart } from 'src/app/Models/icart';
import { Iproduct } from 'src/app/Models/iproduct';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit,AfterViewChecked {
  totalPrice ! :number ;
  productListCart:ICart[] = []; 
  constructor(private cartApi:CartService,
              private router:Router,
              private productApi:ProductService,
              private toastApi:NgToastService) {}

  ngAfterViewChecked(): void {
  }
  ngOnInit(): void {
    this.cartApi.GetCartItems().subscribe(res=>{
      this.productListCart = res;
      this.totalPrice = this.cartApi.GetTotalPrice();
    })
  }
  RemoveItem(product:any)
  {
    this.cartApi.RemoveItem(product);
  }
  RemoveAll()
  {
    this.cartApi.RemoveAll();
  }
  ShopMore()
  {
    this.router.navigate(['/Product']) 
  }
  PlusQuintity(cart:ICart)
  {
    this.totalPrice +=cart.price;
    var resultProduct= this.cartApi.cartItems.find(pro=>pro.id == cart.id);
    if(resultProduct)
    {
    resultProduct.totalPrice += cart.price
    }
  }
  MinusQuintity(cart:ICart)
  {
    this.totalPrice -=cart.price;
    var resultProduct= this.cartApi.cartItems.find(pro=>pro.id == cart.id);
    if(resultProduct)
    {
    resultProduct.totalPrice += cart.price
    }
  }
  public createImgPath = (serverPath: string) => { 
    return `http://localhost:65348/${serverPath}`; 
  }
  Checkout()
  {
    let productUpdate :Iproduct = {} as Iproduct;
    this.productListCart.forEach(element=>{
      this.productApi.GetById(element.id).subscribe(pro=>{
        productUpdate.id=pro.id;
        productUpdate.name=pro.name;
        productUpdate.description=pro.description;
        productUpdate.photo=pro.photo;
        productUpdate.price=pro.price;
        productUpdate.quantity=pro.quantity - element.quantity;
        productUpdate.cateogryID=pro.cateogryID;
        productUpdate.purchaseDate=pro.purchaseDate;
        console.log(productUpdate);
        this.productApi.Update(productUpdate).subscribe(pro=>{
          console.log(pro);
        });
      })
    })
    this.productListCart = [];
    this.totalPrice = 0;
    this.cartApi.productList.next(this.cartApi.cartItems=[]);
    this.toastApi.warning({summary:"Order success",duration:3000});
  }
}

