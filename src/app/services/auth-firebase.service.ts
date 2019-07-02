import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {
  redirectUrl: string;


  

  constructor( public angularFireAuth: AngularFireAuth) { 
    this.angularFireAuth.authState.subscribe(userResponse => {
      if (userResponse) {
        localStorage.setItem('user', JSON.stringify(userResponse));
      } else {
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

