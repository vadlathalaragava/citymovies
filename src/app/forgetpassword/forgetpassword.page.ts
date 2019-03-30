import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.page.html',
  styleUrls: ['./forgetpassword.page.scss'],
})
export class ForgetpasswordPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotoLogin(){
    this.router.navigate(['login'])
  }

}
