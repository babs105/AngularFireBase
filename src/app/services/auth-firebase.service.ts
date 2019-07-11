import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {
  redirectUrl: string;


  

  constructor( public angularFireAuth: AngularFireAuth) { 
    console.log("DANS CONST AUTHFIREBASE SERVICE ");
    this.angularFireAuth.authState.subscribe(userResponse => {
      console.log("reponse à la souscription AUTHFIREBASE");
      if (userResponse) {
        console.log("test user  connecter AUTHFIREBASE");
        console.log("Enregistrer info user en local AUTHFIREBASE : ",userResponse);

        localStorage.setItem('user', JSON.stringify(userResponse));
      } else {
        console.log("test user not connecter AUTHFIREBASE");
        localStorage.setItem('user', null);
      }
    })
  }

  
 
  async login(email: string, password: string) {
    return await this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }
 
  async register(email: string, password: string) {
    return await this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
  }
 
  async sendEmailVerification() {
    return await this.angularFireAuth.auth.currentUser.sendEmailVerification();
  }
 
  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.angularFireAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }
 
  async logout() {
    return await this.angularFireAuth.auth.signOut();
  }
 
 
  isUserLoggedIn() {
   
    return JSON.parse(localStorage.getItem('user'));
  }
 
  async  loginWithGoogle() {
    return await this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  }
}

