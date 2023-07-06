import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppConstants } from '../config/constants';
@Injectable({
  providedIn: 'root'
})

export class SessionDataService {

  constructor() {


  }

  setAccessToken(token: string) {
    const rememberMe: string = JSON.parse(localStorage.getItem(AppConstants.PRISISTED_KEYS.REMEMBER_ME) || "false");
    if (rememberMe) {
      localStorage.setItem(AppConstants.PRISISTED_KEYS.ACCESS_TOKEN, token);
    } else {
      sessionStorage.setItem(AppConstants.PRISISTED_KEYS.ACCESS_TOKEN, token);
    }
  }

  getAccessToken(): string {
    let token = '';
    const rememberMe: string = JSON.parse(localStorage.getItem(AppConstants.PRISISTED_KEYS.REMEMBER_ME) || "false");
    if (rememberMe) {
      token = localStorage.getItem(AppConstants.PRISISTED_KEYS.ACCESS_TOKEN) || '';
    } else {
      token = sessionStorage.getItem(AppConstants.PRISISTED_KEYS.ACCESS_TOKEN) || '';
    }
    return token;
  }




}
