import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login-service';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  loginRegister=true;
 
  constructor(
    public authFirebaseService :AuthFirebaseService,
    private router:Router)
     { 
    console.log("DANS const header");
    // this.userDetails=this.authFirebaseService.isUserLoggedIn();
    //console.log("userDeatails dans const",this.userDetails);
  }

  ngOnInit() {
   
  }

  logout(){
    
  this.authFirebaseService.logout().then(res => {
    console.log("DAns logout",res) ;
    
    localStorage.removeItem('user');
    // this.userDetails=null;
    this.loginRegister=true;
    this.router.navigate(['/home'])

  })
 ,err =>  console.log(err.message)
 }


 login(){
  this.loginRegister=true;

  this.router.navigate(['/login',{form:'log'}])
}

register(){
  this.loginRegister=true;
  
  this.router.navigate( ['/login',{form:'reg'}]);
}
}
