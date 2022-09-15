import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminComponent } from './components/admin/admin.component';
import { CartpageComponent } from './components/cartpage/cartpage.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { SignupComponent } from './components/signup/signup.component';
import { SuccessComponent } from './components/success/success.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
   {path:'',component:WelcomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'payments',component:PaymentsComponent},
  {path:'header',component:HeaderComponent},
  {path:'food/:id',component:FoodPageComponent},
  {path:'cartpage',component:CartpageComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'admin',component:AdminComponent},
  {path:'success',component:SuccessComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
