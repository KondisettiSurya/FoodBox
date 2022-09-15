import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Foods } from 'src/app/Models/Food';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
 food!:Foods;
  constructor(private activatedRoute:ActivatedRoute,
     private foodService:FoodService, 
     private cartservice:CartService,
     private router:Router) { 

    activatedRoute.params.subscribe(params=>{

      if(params['id']){
        this.food=foodService.getFoodById(params['id']);
      }
    })
  }
   
  ngOnInit(): void {
  }

  addToCart(){
    this.cartservice.addToCart(this.food);
    this.router.navigateByUrl('/cartpage');
  }
}
