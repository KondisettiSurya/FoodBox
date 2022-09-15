import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/Cart';
import { CartItem } from 'src/app/Models/CartItem';
import { Foods } from 'src/app/Models/Food';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {
  cart!:Cart;
  constructor(private cartservice:CartService, private route:Router) {
    this.setCart();
   }

  ngOnInit(): void {
  }
  
setCart(){
  this.cart=this.cartservice.getCart();
}

  removeFromCart(cartItme:CartItem):void{
    this.cartservice.removeFromCart(cartItme.food.id);
    this.setCart();
  }

  changeQuantity(cartItme:CartItem,quantityInString:string){
    
    const quantity =parseInt(quantityInString);
    this.cartservice.changeQuantity(cartItme.food.id,quantity);
    this.setCart();

  }

  checkout(){
    this.route.navigateByUrl('/checkout');
  }

 
}
