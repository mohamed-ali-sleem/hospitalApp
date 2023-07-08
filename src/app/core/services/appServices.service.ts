import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SessionDataService } from './session-data.service';
import { AppConstants } from '../config/constants';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class AppService {
  constructor(private _router: Router, private _httpClient: HttpClient) { }

  // LOGIN
  login(userId: string, password: string): Observable<any> {
    const url = AppConstants.API.LOGIN_API;
    const body = new HttpParams()
      .set('patientEmail', userId)
      .set('patientPassword', password)
    // .set('sourceChannel', 'ADMINISTRATION_PORTAL')
    return this._httpClient.post(url, body.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })
  }

  // REGISTER
  registerUser(user: any): Observable<any> {
    const url = AppConstants.API.REGISER_API;
    const body = new HttpParams()
      .set('patientEmail', user.patientEmail)
      .set('fullName', user.fullName)
      .set('patientPhone', user.patientPhone)
      .set('patientPassword', user.patientPassword)
    return this._httpClient.post(url, body.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })
  }

  // LOGOUT
  logout() {
    localStorage.removeItem(AppConstants.PRISISTED_KEYS.IS_LOGGED_IN);
    localStorage.removeItem(AppConstants.PRISISTED_KEYS.CURRENT_USER);
    this._router.navigate(['/home']);
  }

  // LOAD DEPARTMENTS LIST
  loadDeparments(): Observable<any> {
    const url = AppConstants.API.DEPARTMENT_API;
    return this._httpClient.get(url)
  }

  // LOAD DOCTORS LIST
  loadDoctors(): Observable<any> {
    const url = AppConstants.API.DOCTORS_API;
    return this._httpClient.get(url)
  }

  // LOAD APPOINTMENTS LIST
  loadAppointments(patientID: any): Observable<any> {
    const url = AppConstants.API.APPOINTMENT_API;
    const body = new HttpParams()
      .set('patientID', patientID)
    return this._httpClient.post(url,
      body.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })

  }

  addAppointment(appointment: any): Observable<any> {
    const url = AppConstants.API.APPOINTMENT_API;
    const body = new HttpParams()
      .set('date', appointment.date)
      .set('time', appointment.time)
      .set('doctorID', appointment.doctorID)
      .set('patientID', appointment.patientID)
    return this._httpClient.post(url, body.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })
  }
}


