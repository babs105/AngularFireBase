import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login-service';
import { FormBuilder } from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Customer } from 'src/app/model/customer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  titre:string = "AUTHENTICATION";
  affichFormLogin:boolean=true;
  
  message;
  checkoutForm;
  userDetails: any;
  // isForgotPassword: boolean;
  
  constructor(private authFirebaseService :AuthFirebaseService,private activeRoute: ActivatedRoute, private formBuilder: FormBuilder,private router:Router) {
    console.log("dans const login");
    this.checkoutForm = this.formBuilder.group({
      login: '',
      password: ''
    });
   }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params=> {
      if(params.get('form')==="log"){
          this.affichFormLogin=true;
          this.titre= "AUTHENTICATION";
          this.message="";
      }else if (params.get('form')==="reg"){
        this.affichFormLogin=false;
        this.titre= "REGISTRATION";
        this.message="";
      }else{
        this.router.navigate(['/pagenotfound'])
      }
      }
    );
     
       
        
  }

//  changerTitle(customerdata){
//    this.titre=customerdata.titre;
   
//   }
  
 
   isUserLoggedIn(){
    this.userDetails = this.authFirebaseService.isUserLoggedIn();

   }
    goToLogin(){
      this.authFirebaseService.logout().then(res => {
        console.log("DAns logout",res) ;
        
        localStorage.removeItem('user');
        // this.userDetails=null;
        // this.loginRegister=true;
        this.router.navigate( ['/login',{form:'log'}]);
    });
  }

  registerUser(data){
    console.log("Dans metod registerUser ");
    this.authFirebaseService.register(data.login,data.password).then(res=>{
        console.log("registrar response: ",res);

         // Send Varification link in email
        this.authFirebaseService.sendEmailVerification().then(res => {
            console.log("verif email",res);
            
            this.message="Enregistrement Réussie! SVP Verifier votre Email";
            
          }, err => {
            this.message=err.message;
          });
        console.log("####### charger info user apres inscription  dans userDetails ########")
        data.login="";
        data.password="";
        this.isUserLoggedIn();
        this.goToLogin();
       
        
      }, err => {
        
        this.message=err.message;
      });


  }
  loginUser(data){
    console.log("Dans metod loginUser ");
    this.authFirebaseService.login(data.login,data.password)
    .then( res => {
        console.log(" loginUser method response: ",res);

        console.log("####### charger info user apres authentification  dans userDetails ########")
        this.isUserLoggedIn();
        
        this.authFirebaseService.redirectUrl ? this.router.navigateByUrl(this.router.parseUrl(this.authFirebaseService.redirectUrl)):this.router.navigate(['/profile']);
        
        
        
    }, err => {
      
      this.message=err.message;
    });

  }
 
}
