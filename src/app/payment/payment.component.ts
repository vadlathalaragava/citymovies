import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  constructor(private router:Router,private location:Location) { }

  ngOnInit() {}
  goback(){
      this.router.navigate(['/paymentdone']);
  }
  paymentDone(){
    // if(this.data.username == this.data.password){
      this.router.navigate(['/paymentdone']);
    }
}
