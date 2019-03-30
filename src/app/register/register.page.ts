import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import CustomerService from   '../customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
customer ={name:'',password:'',address:'',email:'',phone:''};
  constructor(private router:Router,private customerService:CustomerService) { }

  ngOnInit() {
  }

  addCustomer(customer){
    this.customerService.addRemoteCustomer(this.customer).subscribe(()=>{
        this.router.navigate(['/tabs/tab1']);
    });
  }


  createAccount(){
    this.router.navigate(['/login'])
  }
}
