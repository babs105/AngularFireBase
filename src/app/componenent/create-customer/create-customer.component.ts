import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/model/customer';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer:Customer=new Customer();
  submitted=false;
  constructor(private customerService:CustomerService,private authFirebaseService :AuthFirebaseService,private router:Router ) {
    if(this.authFirebaseService.isUserLoggedIn()){
      this.customer.userId=this.authFirebaseService.isUserLoggedIn().uid;
      console.log("customer id",this.customer.userId);
    }else{
       alert("Vous netes pas connecté");
       this.router.navigate(['/login',{form:"log"}]);
    }
    
  
   }

  ngOnInit() {
  }

 save(){
   this.customerService.createCustomer(this.customer);
   this.customer = new Customer();
 }

  onSubmit(){
    this.submitted=true;
    this.save();

  }

  newCustomer(){
    this.submitted = false;
    this.customer = new Customer();

  }
}
