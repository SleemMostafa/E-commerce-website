import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutProductComponent } from './components/layout-product/layout-product.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsLayoutComponent } from './components/product-details-layout/product-details-layout.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
    {path: '', component:MainLayoutComponent, children: [
       {path:'', redirectTo:'/Home', pathMatch:'full'},
       {path:'Home',component:HomeComponent},
    ]},
    {path: '', component:LayoutProductComponent, children: [
      // {
      //   path: 'Product', 
      //   loadChildren: () => import('src/app/components/product-module/product-module.module').then(m => m.ProductModuleModule)
      // },
      {path:'Product',component:ProductComponent}
      ]},
    {path:'',component:ProductDetailsLayoutComponent,children:[
 
      {
        path: 'User', 
        loadChildren: () => import('src/app/components/user-module/user-module.module').then(m => m.UserModuleModule)
      },

      {
        path: 'Product', 
        loadChildren: () => import('src/app/components/product-module/product-module.module').then(m => m.ProductModuleModule)
      },

    ]},
    
    {path:'**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
