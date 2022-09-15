import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedpages/navbar/navbar.component';
import { FooterComponent } from './sharedpages/footer/footer.component';
import { BodyComponent } from './sharedpages/body/body.component';
import { InfoComponent } from './sharedpages/info/info.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { HomeComponent } from './components/home/home.component';
import { StarComponent } from './sharedpages/star/star.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CartpageComponent } from './components/cartpage/cartpage.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import{HttpClientModule} from '@angular/common/http';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Navbar1Component } from './sharedpages/navbar1/navbar1.component';
import { AdminComponent } from './components/admin/admin.component';
import { SuccessComponent } from './components/success/success.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    InfoComponent,
    LoginComponent,
    SignupComponent,
    AddProductComponent,
    PaymentsComponent,
    HomeComponent,
    StarComponent,
    HeaderComponent,
    CartpageComponent,
    FoodPageComponent,
    CheckoutComponent,
    WelcomeComponent,
    Navbar1Component,
    AdminComponent,
    SuccessComponent,
  
  
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
