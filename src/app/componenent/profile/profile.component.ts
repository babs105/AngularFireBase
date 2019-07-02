import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  tab:any=[
    {prenom:"Ousmane Ndiaye"},
    {prenom:"Fallou Sene"},
    {prenom:"Bara DIOP"},
    {prenom:"Aminata BA"},
    {prenom:"Salif Coly"},
    {prenom:"Rama Ndiaye"}
  ]
 prenom:string;
 editable=-1;
 userDetails:any={};
  constructor(private authFirebaseService :AuthFirebaseService,private activeRoute:ActivatedRoute) { }

  ngOnInit() {
      this.userDetails = this.authFirebaseService.isUserLoggedIn();
  }

 

   addToList(name:string){
     this.tab.push({prenom:name});

   }
  //   editer(){
  //    this.editable=true;

  //  }
  updateName(i){
     
     this.tab[i].prenom=this.prenom;
     this.editable=-1;
     this.prenom='';
   }

}
