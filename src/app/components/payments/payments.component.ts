import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  payment(){
  this.route.navigateByUrl('/success');
  }
}
