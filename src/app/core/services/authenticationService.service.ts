import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SessionDataService } from './session-data.service';
import { AppConstants } from '../config/constants';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class AuthenticationService {
  constructor(private _router: Router, private _sessionDataService: SessionDataService, private _httpClient: HttpClient) { }

  login(userId: string, password: string): Observable<any> {
    const url = AppConstants.API.LOGIN_API;
    const body = {
      patientEmail: 'ahmedmagd@gmial.com',
      patientPassword: '1234566'
    };

    return this._httpClient.post(url, body)
  }

  async logout(): Promise<void> {
    localStorage.removeItem(AppConstants.PRISISTED_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(AppConstants.PRISISTED_KEYS.CURRENT_USER);
    localStorage.removeItem(AppConstants.PRISISTED_KEYS.REMEMBER_ME);
    sessionStorage.clear();

    (window as any).MessageBirdChatWidget.logout()
    this._router.navigate(['home']);
  }


}


