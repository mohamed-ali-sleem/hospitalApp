import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, ActivatedRoute, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionDataService } from '../services/session-data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router, private _sessionDataService: SessionDataService, private http: HttpClient) { }

  canActivate(nextRoute: ActivatedRouteSnapshot, nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let self = this;
    let nextUrl = nextState.url;
    let currentUrl = this._router.url;
    return new Promise<boolean>((resolve, reject) => {
      if (localStorage.getItem('isLoggedin')) {
        if (nextRoute.data['roles'] && nextRoute.data['roles'].length > 0) {
          self._router.navigate(['home']);
        }
        // authorised so return true
        resolve(true);
      } else {
        self._router.navigate(['login'], { queryParams: { returnUrl: nextState.url } });
        resolve(false);
      }
    });
  }
}
