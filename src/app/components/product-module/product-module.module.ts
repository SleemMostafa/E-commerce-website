import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Gaurds/auth.guard';

const routes:Routes=[
  {path:'',redirectTo:"Product/Product",pathMatch:'full'},
  {path:'Product/:proId',component:ProductDetailsComponent},
  {path:'Order',component:ShoppingCartComponent,canActivate:[AuthGuard]},

]

@NgModule({
  declarations: [ShoppingCartComponent,ProductDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModuleModule { }
