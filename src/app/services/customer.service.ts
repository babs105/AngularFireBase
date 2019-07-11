import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore} from '@angular/fire/firestore';
import { Customer } from '../model/customer';
import { AuthFirebaseService } from './auth-firebase.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private dbPath = '/customers';
  idUser;
  customersRef: AngularFirestoreCollection<Customer> = null;

 
  constructor(public db: AngularFirestore,private authFirebaseService:AuthFirebaseService,private router:Router  ) {
    console.log("Dans const customerservice")
    this.customersRef = db.collection(this.dbPath);
    if(this.authFirebaseService.isUserLoggedIn()){
    this.idUser=this.authFirebaseService.isUserLoggedIn().uid;

    console.log("uid ",this.idUser);
    }else{
      alert("Vous netest pas connectes");
      this.router.navigate(['/login',{form:"log"}]);
    }
    
  }
 
  createCustomer(customer: Customer): void {
    console.log("add ",customer)
    this.customersRef.add({...customer});
  }
 
  updateCustomer(key: string, value: any): Promise<void> {
    return this.customersRef.doc(key).update(value);
  }
 
  deleteCustomer(key: string): Promise<void> {
    return this.customersRef.doc(key).delete();
  }
 
  getCustomersList(): AngularFirestoreCollection<Customer> {
    // return this.customersRef;
    console.log("method  getCustomersList de customerService");
    return this.db.collection(this.dbPath,ref => ref.where('userId', '==', this.idUser));
  }

  getActiveCustomers(){
      return this.db.collection<Customer>(this.dbPath, ref => ref.where('active', '==', true).where('userId', '==', this.idUser)).valueChanges();
    
  }
//   getActiveCustomers(){
//     return this.db.collection(this.dbPath, ref => ref.where('active', '==', true)).valueChanges();
   
//  }

 
  deleteAll() {
    this.customersRef.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      },
      error => {
        console.log('Error: ', error);
      });
  }
}
