import { Component } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  
  constructor(private router:Router,private location:Location){
  
  }
  goback(){
    this.location.back();
  }
}
