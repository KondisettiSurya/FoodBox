import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Foods } from 'src/app/Models/Food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 
  foods:Foods[]=[];
  title = "star-angular";
  stars = [1, 2, 3, 4, 5];
  rating = 0;
  hoverState = 0;
  starClassName = "star-rating-blank";
  starId!:number;
  searchText!:any;  
  constructor(private foodService:FoodService, private route:ActivatedRoute) { }
 
  ngOnInit(): void {


    
    this.foods=this.foodService.getall();
  
    console.log(this.starId);
    console.log(this.rating);

    if (this.rating >= this.starId) {
      this.starClassName = "star-rating-filled";
    }

  }
  
  enter(i:any) {
    this.hoverState = i;
  }

  leave() {
    this.hoverState = 0;
  }

  updateRating(i:any) {
    this.rating = i;
  }

  }

  
