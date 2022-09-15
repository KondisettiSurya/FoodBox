import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onsubmit(){
    this.route.navigateByUrl('/payments')
  }
}
