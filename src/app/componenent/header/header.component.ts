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
  
  constructor(private authFirebaseService :AuthFirebaseService,private router:Router) { }

  ngOnInit() {
  }

  logout(){
    
  this.authFirebaseService.logout().then(res => {
    console.log(res) ;
    
    localStorage.removeItem('user');
    this.router.navigate(['/home'])
  })
 ,err =>  console.log(err.message)
 }

}
