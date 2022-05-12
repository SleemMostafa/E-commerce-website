import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductDirectiveDirective } from './Directives/product-directive.directive';
import { CustomeCardPipe } from './Pipes/custome-card.pipe';
import { SaidBarComponent } from './components/said-bar/said-bar.component';
import { LayoutProductComponent } from './components/layout-product/layout-product.component';
import { ProductDetailsLayoutComponent } from './components/product-details-layout/product-details-layout.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { UploadComponent } from './components/upload/upload.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgToastModule } from 'ng-angular-popup';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainLayoutComponent,
    NotFoundComponent,
    ProductDirectiveDirective,
    CustomeCardPipe,
    SaidBarComponent,
    LayoutProductComponent,
    ProductDetailsLayoutComponent,
    UploadComponent,
    ProductComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
