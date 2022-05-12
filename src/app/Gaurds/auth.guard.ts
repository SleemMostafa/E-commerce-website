import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, retry } from 'rxjs';
import { UserService } from '../Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userApi:UserService,
              private router:Router){
    console.log(this.userApi.IsUserLogged);
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.userApi.IsUserLogged)
    {
      return true;
    }
    else{
      let conf = confirm("You must login to make order.... you want login?")
      if(conf)
      {
        this.router.navigate(['/Login']);
        return false;
      }
    }
    return false;
  }
  
}
