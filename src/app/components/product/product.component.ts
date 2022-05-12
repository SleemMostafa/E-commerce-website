import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ICart } from 'src/app/Models/icart';
import { ICategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { CartService } from 'src/app/Services/cart.service';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit  {
  categoryList:ICategory[] = [];
  productListOfCategory:Iproduct[] = [];
  selectedCatID:number=0;
  constructor(private productApi:ProductService
              ,private router:Router
              ,private categoryApi:CategoryService
              ,private cartApi:CartService
              ,private toasApi:NgToastService
) {
   }
  ngOnInit(): void {
    this.categoryApi.GetAllCategory().subscribe(categories=>{
      this.categoryList = categories;
    })
    if(this.selectedCatID == 0)
    { 
      this.productApi.GetAllProducts().subscribe(proList=>{
        this.productListOfCategory = proList;
      })
    }
  }
  changeSelect(selectedCatID:number)
  {
    this.selectedCatID = selectedCatID
    if(this.selectedCatID == 0)
    { 
      this.productApi.GetAllProducts().subscribe(proList=>{
        this.productListOfCategory = proList;
      })
    }
    else
    {
      this.productApi.GetProductByCategoryId(this.selectedCatID).subscribe(proList=>{
        this.productListOfCategory = proList;
      })
    }
  }

  ProductIsTrackBy(index:number,item:Iproduct)
  {
    return item.id;
  }

  OpenProductDetail(productId:number)
  {
    this.router.navigate(['Product/Product',productId])
  }
  AddToCart(count:number,product:Iproduct)
  {  
      var resultProduct = this.cartApi.cartItems.find(pro=>pro.id==product.id)
      if(resultProduct)
      {
        // alert("Product Exist!");
        this.toasApi.error({summary:"Falid ,product exist befor !!",duration:3000});
      }
      else{
        this.cartApi.AddToCart(count,product)
        this.toasApi.success({summary:"Product add cart success",duration:3000})
      }      
  }
  public createImgPath = (serverPath: string) => { 
    return `http://localhost:65348/${serverPath}`; 
  }
}
