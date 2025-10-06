import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../login/login.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanLoad {

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginService.isLoggedIn? true: this.router.navigate(['/login']);
    // return this.loginService.isLoggedIn;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true; // populate this function with the logic that you want to pass
    return this.loginService.isLoggedIn;
  }
}
