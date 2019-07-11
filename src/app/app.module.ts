import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componenent/home/home.component';
import { HeaderComponent } from './componenent/header/header.component';
import { FooterComponent } from './componenent/footer/footer.component';
import { DashbaordComponent } from './componenent/dashbaord/dashbaord.component';
import { LoginComponent } from './componenent/login/login.component';
import { ProfileComponent } from './componenent/profile/profile.component';
import { DetailsComponent } from './componenent/details/details.component';
import { PageNotFoundComponent } from './componenent/page-not-found/page-not-found.component';
import { MeteoListComponent } from './componenent/meteo-list/meteo-list.component';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireModule } from "@angular/fire";
import { ButtonSearchComponent } from './componenent/button-search/button-search.component';
import { SearchPipe } from './Pipes/search.pipe';
import { CustomerDetailsComponent } from './componenent/customer-details/customer-details.component';
import { CreateCustomerComponent } from './componenent/create-customer/create-customer.component';
import { CustomersListComponent } from './componenent/customers-list/customers-list.component';


var firebaseConfig = {
  apiKey: "AIzaSyCnvRiKyim8PIRV14zEKVlIBEuryGVprH8",
  authDomain: "bafane-b98ed.firebaseapp.com",
  databaseURL: "https://bafane-b98ed.firebaseio.com",
  projectId: "bafane-b98ed",
  storageBucket: "",
  messagingSenderId: "182968488860",
  appId: "1:182968488860:web:ef028ab6a365b9e6"
};




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DashbaordComponent,
    LoginComponent,
    ProfileComponent,
    DetailsComponent,
    PageNotFoundComponent,
    MeteoListComponent,
    ButtonSearchComponent,
    SearchPipe,
    CustomerDetailsComponent,
    CreateCustomerComponent,
    CustomersListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }