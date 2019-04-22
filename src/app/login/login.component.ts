import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CustomerService from '../customer.service';
import { AlertController } from '@ionic/angular';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  customers = [];
  customer = {
    name: '',
    email: '',
    password: '',
    phone: '',
    address: ''
  }
  constructor(private router: Router, private customerService: CustomerService, public alertController: AlertController, private registerService: RegisterService) { }
  data = { email: "", password: "" };
  ngOnInit() { 
    this.customerService.getRemoteCustomers().subscribe((result) => (this.customers = result));
  }


  


  doLogin(customer) {
    console.log('called');
    // this.customerService.authRemoteCustomer(validate).subscribe((result)=>{
    //    console.log(result);
    //    if(result.password==validate.password){
    //     this.router.navigate(['/tabs']);
    //    }
    // })


    for (var i = 0; i < this.customers.length; i++) {
      if ((customer.email == this.customers[i].email) && (customer.password == this.customers[i].password)) {
        console.log('customer');
        this.router.navigate(['/tabs/tab1']);
        if (localStorage.getItem('user') == null) {
          localStorage.setItem('user', JSON.stringify(customer));
        }
      }
      else if((customer.email != this.customers[i].email) && (customer.password != this.customers[i].password)){
        console.log('failed to login')
        }
    }
  }

  account() {
    this.router.navigate(['/register']);
  }

  gotoList() {
    this.router.navigate(['/tabs/tab1']);
  }
  forgot() {
    this.router.navigate(['/forgetpassword']);
  }

}
