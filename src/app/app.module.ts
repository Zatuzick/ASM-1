import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomePageComponent } from './pages/homePage/home-page/home-page.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { AddproductComponent } from './pages/admin/addproduct/addproduct.component';
import { UpdateproductComponent } from './pages/admin/updateproduct/updateproduct.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductdetailComponent } from './pages/productdetail/productdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    ProductListComponent,
    HomePageComponent,
    DashboardComponent,
    AdminProductComponent,
    AddproductComponent,
    UpdateproductComponent,
    ProductPageComponent,
    ProductdetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
