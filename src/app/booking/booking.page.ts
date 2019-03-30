import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  updateTextArea(){
    this.router.navigate(['/payment']);
  }

  goback(){
    this.router.navigate(['/tabs/tab1']);
  }
}
