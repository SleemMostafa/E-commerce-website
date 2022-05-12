import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',redirectTo:'/User/Login',pathMatch:'full'},
  {path:'Login',component:LoginComponent},
  {path:'Logut',component:LogoutComponent},
  {path:'Register',component:RegisterComponent},
]

@NgModule({
  declarations: [LoginComponent,LogoutComponent,RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModuleModule { }
