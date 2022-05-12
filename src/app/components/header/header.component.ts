import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  date:Date = new Date();
  itemCount:number = 0;
  isUserLogged:boolean=false;
  constructor(private userApi:UserService,
              private router:Router,
              private cartApi:CartService) { }

  ngOnInit(): void {
    this.cartApi.GetCartItems().subscribe(res=>{
      this.itemCount = res.length;
    })
    this.userApi.LoggedStatus().subscribe(stuts=>{
      this.isUserLogged = stuts;
    })
  }
  Logout()
  {
    this.userApi.Logout();
  }
  OpenCart()
  {
    this.router.navigate(['Product/Order']);
  }
}
