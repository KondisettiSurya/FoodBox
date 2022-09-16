
import { Injectable } from '@angular/core';
import { Foods } from '../Models/Food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getall().find(food=>food.id==id)!;
  }

  getall():Foods[]{
return[
{
  id:1,
  price:120,
  name:'Cake',
  notfavourite:true,
  star:3.0,
  tags:['fastfood','Breakfast','BreakTime'],
  image:'assets/images/pexels-abhinav-goswami-291528.jpg',
  origins:['Rajahmundry','Hyderabad','Nellore'],
  Time:'30-40'

},
{
  id:2,
  price:80,
  name:'Somosa',
  notfavourite:false,
  star:5.0,
  tags:['fastfood','pizza','Lunch'],
  image:'assets/images/pexels-marvin-ozz-2474658.jpg',
  origins:['Rajahmundry','Hyderabad','Eluru'],
  Time:'50-60'

},
{
  id:3,
  price:150,
  name:'Chicken',
  notfavourite:false,
  star:3.0,
  tags:['fastfood','Dinner','Lunch'],
  image:'assets/images/pexels-pixabay-60616.jpg',
  origins:['Vizag','Hyderabad','Eluru'],
  Time:'60-110'

},
{
  id:4,
  price:180,
  name:'Moon-Dal',
  notfavourite:false,
  star:4.0,
  tags:['Dinner','Lunch'],
  image:'assets/images/pexels-muhammad-khawar-nazir-9287039.jpg',
  origins:['Vizag','Hyderabad','Banglore'],
  Time:'60-120'

},
{
  id:5,
  price:220,
  name:'Mahmood',
  notfavourite:false,
  star:4.0,
  tags:['Dinner','Lunch','Breakfast'],
  image:'assets/images/pexels-omar-mahmood-106343.jpg',
  origins:['vijaywada','Hyderabad','Banglore'],
  Time:'60-120'

},
{
  id:6,
  price:140,
  name:'Pasta',
  notfavourite:false,
  star:3.0,
  tags:['Dinner','Lunch','Breakfast'],
  image:'assets/images/pexels-engin-akyurt-1437267.jpg',
  origins:['vijaywada','Rajahmundry','Banglore'],
  Time:'80-120'

},
{
  id:7,
  price:150,
  name:'Roles',
  notfavourite:true,
  star:3.0,
  tags:['Dinner','Lunch','Breakfast'],
  image:'assets/images/pexels-pixabay-461198.jpg',
  origins:['vijaywada','vizag','Banglore'],
  Time:'80-120'

},
{
  id:8,
  price:250,
  name:'Fish Fry',
  notfavourite:false,
  star:3.0,
  tags:['Dinner','Lunch','Breakfast'],
  image:'assets/images/pexels-dana-tentis-262959.jpg',
  origins:['vijaywada','Rajahmundry','Chennai'],
  Time:'60-110'

},

{
  id:9,
  price:30,
  name:'idli',
  notfavourite:true,
  star:3.0,
  tags:['Dinner','Lunch','Breakfast'],
  image:'assets/images/pexels-cats-coming-674574.jpg',
  origins:['vijaywada','Rajahmundry','Banglore'],
  Time:'70-120'

},
{
  id:10,
  price:80,
  name:'Cake',
  notfavourite:false,
  star:3.0,
  tags:['Breakfast'],
  image:'assets/images/pexels-jess-bailey-designs-913136.jpg',
  origins:['vijaywada','Rajahmundry','hyderabad'],
  Time:'40-80'

},
{
  id:11,
  price:150,
  name:'Roast',
  notfavourite:false,
  star:4.0,
  tags:['Dinner','Lunch','Breakfast'],
  image:'assets/images/pexels-chan-walrus-1059943.jpg',
  origins:['vijaywada','Chennai'],
  Time:'60-150'

},
{
  id:12,
  price:110,
  name:'Burger',
  notfavourite:false,
  star:3.0,
  tags:['Dinner','Lunch','Breakfast'],
  image:'assets/images/pexels-rajesh-tp-1633578.jpg',
  origins:['vijaywada','Rajahmundry','Chennai'],
  Time:'60-110'

},
{
  id:13,
  price:180,
  name:'Secretes',
  notfavourite:false,
  star:4.0,
  tags:['Dinner','Lunch','Breakfast'],
  image:'assets/images/pexels-saveurs-secretes-5410407.jpg',
  origins:['vijaywada','Banglore','vizag'],
  Time:'60-80'

},
{
  id:14,
  price:50,
  name:'Sandra',
  notfavourite:false,
  star:3.0,
  tags:['Dinner','Lunch','Breakfast'],
  image:'assets/images/pexels-sandra-filipe-6183633.jpg',
  origins:['vijaywada','Rajahmundry','Chennai'],
  Time:'60-110'

},
{
  id:15,
  price:40,
  name:'Chocolate',
  notfavourite:false,
  star:3.0,
  tags:['Breakfast'],
  image:'assets/images/pexels-pixabay-45202.jpg',
  origins:['vijaywada','Chennai'],
  Time:'60-110'

},
{
  id:16,
  price:120,
  name:'Trangdoan',
  notfavourite:false,
  star:3.0,
  tags:['Breakfast'],
  image:'assets/images/pexels-trang-doan-1092730.jpg',
  origins:['vijaywada','Chennai','Banglore'],
  Time:'60-110'

}
  
]
}
}