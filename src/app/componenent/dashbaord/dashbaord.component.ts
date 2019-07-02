import { Component, OnInit } from '@angular/core';
import { MeteoService } from 'src/app/services/meteo.service';
import { ActivatedRoute,Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { Meteo } from 'src/app/model/meteo';
import { LoginService } from 'src/app/services/login-service';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css']
})
export class DashbaordComponent implements OnInit {

  meteos:Meteo[];
  villeSelected;
  
  
  constructor(private meteoService:MeteoService,private router:Router,private activeRoute:ActivatedRoute){
  
  }

   

  ngOnInit() {
   
    
      this.activeRoute.paramMap.pipe(
        switchMap(params => {
          this.villeSelected=params.get('name');
          return this.meteoService.getAllMeteos();
        })
      ).subscribe(meteos => this.meteos=meteos);
    
   
  }

  afficherDetailsMeteo(name:string){
    this.router.navigate(['/details',name])
  }
}
