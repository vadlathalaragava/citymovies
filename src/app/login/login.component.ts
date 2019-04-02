import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CustomerService from '../customer.service';
import { AlertController } from '@ionic/angular';
import {RegisterService}  from '../register.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private customerService:CustomerService,public alertController: AlertController,private registerService:RegisterService) { }
  data = {email:"",password:""};
  ngOnInit() {}

  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Login Failed',
      message: 'please Enter Login Details',
      buttons: ['OK']
    });

    await alert.present();
  }
  validate={
    email:'',
    password:''
  };
 

  doLogin(validate){
    console.log('called')
    this.customerService.authRemoteCustomer(validate).subscribe((result)=>{
       console.log(result);
       if(result.password==validate.password){
        this.router.navigate(['/tabs/tab1']);
       }
    })
  }

  account(){
    this.router.navigate(['/register']);
  }

  gotoList(){
    this.router.navigate(['/tabs/tab1']);
  }
  forgot(){
    this.router.navigate(['/forgetpassword']);
  }
    
}
