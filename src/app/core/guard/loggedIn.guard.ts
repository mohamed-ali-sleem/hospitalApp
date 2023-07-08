
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppConstants } from '../config/constants';
@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
    constructor(private _router: Router) { }

    async canActivate() {
        let token = localStorage.getItem(AppConstants.PRISISTED_KEYS.IS_LOGGED_IN) || '';
        return new Promise<boolean>((resolve, reject) => {
            if (token) {
                this._router.navigate(['/home']);
                resolve(true);
            } else {
                resolve(true);
            }
        });
    }
}
