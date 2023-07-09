
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppConstants } from '../config/constants';
@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
    constructor(private _router: Router) { }

    async canActivate() {
        let isLoggedIn = localStorage.getItem(AppConstants.PRISISTED_KEYS.IS_LOGGED_IN) || '';
        return new Promise<boolean>((resolve, reject) => {
            if (isLoggedIn) {
                this._router.navigate(['/home']);
                resolve(true);
            } else {
                resolve(true);
            }
        });
    }
}
