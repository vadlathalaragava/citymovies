import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  customer:any=[];
  customers:any = [];
  private customerUrl = 'http://localhost:3000/api/customer';
  constructor(private http: HttpClient) { 
    var defaultList =[
      {
        id:1,
        name:'Swathi',
        email:'swathi@gmail.com',
        phone:'9999999999',
        address:'India'
      },
      {
        id:2,
        name:'Divya',
        email:'divya@gmail.com',
        phone:'992343499',
        address:'India'
      }
    ];
    if(localStorage.getItem('customers')==null || JSON.parse(localStorage.getItem('customers')).length==0)
    {
      this.customer = defaultList;
      this.setLocaStorageCustomer(this.customer);
    }else{
      this.getLocaStorageCustomer();
    }
  }
  getLocaStorageCustomer(){
    this.customers = JSON.parse(localStorage.getItem('customers'));
  }
  setLocaStorageCustomer(list){
    localStorage.setItem('customers',JSON.stringify(list))
  }
  getDBCustomers (){
    this.http.get<[]>(this.customerUrl).subscribe((result)=>{console.log(JSON.stringify(result))});
  }
  getRemoteCustomers(): Observable<[]>{
  	return this.http.get<[]>(this.customerUrl); 		
  }
  deleteRemoteCustomer(customer){
  	return this.http.delete(this.customerUrl+"/"+customer.id); 		
  } 
  
  addRemoteCustomer(customer):Observable<any>{
  	return this.http.post(this.customerUrl,customer);
 }
  updateRemoteCustomer(customer):Observable<any>{
    return this.http.put(this.customerUrl + "/"+customer.id,customer);
  }

  getRemoteCustomerById(id):Observable<any>{
  return this.http.get<[]>(this.customerUrl + "/"+id);
  }

  getCustomer(){
    return this.customers;
  }
  addCustomer(customer){
    customer.id = Math.round(Math.random()*10000);
    this.customers.push(customer);    
    this.setLocaStorageCustomer(this.customers);
    console.log(this.customers);

  }
  // deleteCustomer(id){
  //   var list = [];
  //   for(var i=0;i<this.customers.length;i++){
  //     if(id!== this.customers[i].id){
  //       list.push(this.customers[i]);
  //     }
  //   }
  //   this.setLocaStorageCustomer(this.customers);
  //   return this.customers = list;
  // }
  updateCustomer(customer){
    for(var i=0; i<this.customers.length;i++){
      if(this.customers[i].id==customer.id){
      this.customers[i]=customer;
      }
    }
    this.setLocaStorageCustomer(this.customers);
  }
  addUpdateCustomer(customer){
    var update = false;
    for(var i=0; i<this.customers.length;i++){
      if(this.customers[i].id==customer.id){
        update = true;
        this.customers[i]=customer;
        // return this.customers[i];
        break;
      }
    }
    if(!update){
      this.customers.push(customer);
      customer.id = Math.round(Math.random()*10000);
      this.setLocaStorageCustomer(this.customers);   
    }
  }
  // getCustomerById(id){
  //   for(var i=0;i<this.customers.length;i++){
  //     if(this.customers[i].id==id ){
  //       return this.customers[i];
  //     }
  //   }
  //   this.setLocaStorageCustomer(this.customers);
  // }
  
}
