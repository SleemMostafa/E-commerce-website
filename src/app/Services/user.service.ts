import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILogin } from '../Models/ilogin';
import { IUser } from '../Models/iuser';
import { TokenResult } from '../Models/token-result';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  IsLogged:BehaviorSubject<boolean>;
  private httpOptions;
  constructor(private httpClient:HttpClient) {
    this.IsLogged= new BehaviorSubject<boolean>(false);
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
         'Authorization': `Bearer ${localStorage.getItem("token")}`
      })
    }
   }

  Login(userLogin:ILogin)
  {
      return this.httpClient.post<TokenResult>(`${environment.APIBaseURL}/api/Account/Login`,JSON.stringify(userLogin),this.httpOptions);
  }
  Logout()
  {
    localStorage.removeItem("token");
    this.IsLogged.next(false);
  }
  Register(newUserRegister:IUser):Observable<IUser>
  {
    console.log("in service" + newUserRegister);
    return this.httpClient.post<IUser>(`${environment.APIBaseURL}/api/Account/Register`,JSON.stringify(newUserRegister),this.httpOptions);
  }
  get IsUserLogged():boolean
  {
    return localStorage.getItem("token") ? true : false;
  }
  LoggedStatus()
  {
    return this.IsLogged;
  }

}
