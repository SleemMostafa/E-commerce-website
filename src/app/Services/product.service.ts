import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  private httpOptions;
  constructor(private httpClient:HttpClient){ 
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // , Authorization': 'Token'
      })
    }
  }
  GetAllProducts(): Observable<Iproduct[]>
  {
    return this.httpClient.get<Iproduct[]>(`${environment.APIBaseURL}/api/Product`)
  }
  GetProductByCategoryId(categoryId:number):Observable<Iproduct[]>
  {
    return this.httpClient.get<Iproduct[]>(`${environment.APIBaseURL}/api/Product/GetProductByCategoryId/${categoryId}?categoryId=${categoryId}`)
  }
  Update(product:Iproduct):Observable<Iproduct>
  { 
    console.log("Data Api"+product);
     //return this.httpClient.patch<Iproduct>(`${environment.APIBaseURL}/api/Product/${product.id}`,JSON.stringify(product),this.httpOptions);
    return this.httpClient.patch<Iproduct>(`${environment.APIBaseURL}/api/Product/${product.id}?productId=${product.id}`,JSON.stringify(product),this.httpOptions);

  }
  GetById(productId:number):Observable<Iproduct>  
  {
    return this.httpClient.get<Iproduct>(`${environment.APIBaseURL}/api/Product/1?productId=${productId}`)
  }
}
