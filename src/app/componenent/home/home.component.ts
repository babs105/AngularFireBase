import { Component, OnInit } from '@angular/core';
import { MeteoService } from 'src/app/services/meteo.service';
import { ActivatedRoute,Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mes;
   constructor(private authFirebaseService :AuthFirebaseService) {
    console.log("DANS CONST HOME");
    this.authFirebaseService.isUserLoggedIn() ? this.mes='':this.mes='LOG IN FOR MORE DETAILS IF NOT YET REGISTER YOU';
    }

  ngOnInit() {
    console.log("DANS INIT HOME");
    
   
  }

}