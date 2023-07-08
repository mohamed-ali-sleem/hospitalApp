import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppConstants } from '../config/constants';
@Injectable({
  providedIn: 'root'
})

export class SessionDataService {
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentUser: Observable<any> = this.currentUserSubject.asObservable();
  constructor() {
    const isLoggedIn: string = JSON.parse(localStorage.getItem(AppConstants.PRISISTED_KEYS.IS_LOGGED_IN) || "false");
    const user: any = isLoggedIn ? JSON.parse(localStorage.getItem(AppConstants.PRISISTED_KEYS.CURRENT_USER) || '{}') : null;

    this.currentUserSubject = new BehaviorSubject<any>(user);
    this.currentUser = this.currentUserSubject.asObservable();

  }

  setcurrentUser(currentUser: any) {
    if (currentUser) {
      const isLoggedIn: string = JSON.parse(localStorage.getItem(AppConstants.PRISISTED_KEYS.IS_LOGGED_IN) || "false");

      localStorage.setItem(AppConstants.PRISISTED_KEYS.CURRENT_USER, JSON.stringify(currentUser));

    } else {
      localStorage.removeItem(AppConstants.PRISISTED_KEYS.CURRENT_USER);
      sessionStorage.removeItem(AppConstants.PRISISTED_KEYS.CURRENT_USER);
    }
    this.currentUserSubject.next(currentUser);
  }

  getcurrentUser(): any {
    return this.currentUserSubject.value;
  }

}
