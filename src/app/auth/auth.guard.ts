import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginServiceService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url: string = state.url;
      return  this.checkLogin(url);
  }
  checkLogin(url: string): boolean {
    if (this.loginService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.loginService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    //cette navigation annule automatiquement la navigation actuelle donc la methode return false
    //mais on peut etre beaucoup plus explicite en ajoutant lr return false

    // return false;
  }
  
}
