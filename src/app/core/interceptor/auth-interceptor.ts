import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { SessionDataService } from '../services/session-data.service';
import { catchError } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { AppService } from '../services/appServices.service';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _sessionDataService: SessionDataService, private _appService: AppService,
    private _translate: TranslateService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = ''
    if (token) {
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });
    }
    return next.handle(request).pipe(catchError(err => {
      let _self = this;
      if ([401, 403].includes(err.status)) {
        // auto logout if 401 or 403 response returned from api
        this._appService.logout();
        Swal.fire({
          toast: true,
          position: this._translate.currentLang === 'en' ? "top-end" : "top-start",
          showConfirmButton: false,
          timer: 4000,
          title: _self._translate.instant('GENERAL.TIME_OUT'),
          icon: "error"
        });
      }
      console.error(err);
      return throwError(err);
    }))
  }

}
