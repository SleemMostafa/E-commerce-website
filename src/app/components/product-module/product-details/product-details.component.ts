import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  private currProductId:number=0;
  currProduct:Iproduct = {} as Iproduct
  listIdOfProduct:number[] = [];
  constructor(private activatedRoute:ActivatedRoute
              ,private productApi:ProductService
              ,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      this.currProductId = Number(paramMap.get("proId"));
      this.productApi.GetById(this.currProductId).subscribe(product=>{
        this.currProduct = product;
      });
    })
    this.productApi.GetAllProducts().subscribe(products=>{
     this.listIdOfProduct = products.map(product=>product.id)
     console.log(this.listIdOfProduct);
    })
  }
  PreviousProduct()
  {
    let currIndex = this.listIdOfProduct.findIndex((val)=>val == this.currProductId)
    if(currIndex != 0)
    {
      this.currProductId = this.listIdOfProduct[currIndex-1];
      this.router.navigate(['Product/Product',this.currProductId])
    }
  }
  NextProduct()
  {
    let currIndex = this.listIdOfProduct.findIndex((val)=>val == this.currProductId)
    if(currIndex < this.listIdOfProduct.length -1)
    {
      this.currProductId = this.listIdOfProduct[currIndex+1];
      this.router.navigate(['Product/Product',this.currProductId])
    }
  }
  IsFirstItem():boolean
  {
    return this.currProductId==this.listIdOfProduct[0];
  }

  IsLastItem():boolean
  {
    return this.currProductId==this.listIdOfProduct[this.listIdOfProduct.length-1];
  }
  public createImgPath = (serverPath: string) => { 
    return `http://localhost:65348/${serverPath}`; 
  }

}
