import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-paymentdone',
  templateUrl: './paymentdone.component.html',
  styleUrls: ['./paymentdone.component.scss'],
})
export class PaymentdoneComponent implements OnInit {

  constructor(private router:Router,private location:Location) { }

  ngOnInit() {}
  gotoBooking(){
    this.router.navigate(['booking']);
  }
  gotoMovies(){
    this.router.navigate(['/tabs/tab1']);
  }
  goback(){
    this.router.navigate(['/payment']);
}
}
