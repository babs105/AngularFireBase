import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentDate:number=(new Date().getFullYear());
  
  constructor() {console.log("Dans footer") ;}

  ngOnInit() {
  }

}
