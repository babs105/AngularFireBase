import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers:any;
  activedCustomers: Customer[];

  constructor( private customerService: CustomerService) {
    console.log("dans liste customers");
    this.getCustomersList();
   }


  ngOnInit() {
  
    this.getActiveCustomers();
    
  }
  getCustomersList() {
    console.log("method  getCustomersList de CustomersListComponent");
    this.customerService.getCustomersList().snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.doc.id, ...c.payload.doc.data() }))
      )
     ).subscribe(customers => {
      this.customers = customers;
    });
  }
  
 getActiveCustomers(){
     this.customerService.getActiveCustomers().subscribe(activeCustomer => this.activedCustomers=activeCustomer);
   
    // this.customerService.getCustomersList().snapshotChanges().pipe(
    //   map(changes => changes.map(c => ({ key: c.payload.doc.id, ...c.payload.doc.data() }))
    //   )
    //  ).subscribe(activeCustomer => {
    //   this.activedCustomers=activeCustomer;
    // });
 }
  deleteCustomers() {
    this.customerService.deleteAll();
  }

}
