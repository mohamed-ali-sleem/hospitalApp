import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { AppConstants } from 'src/app/core/config/constants';
import { AppService } from 'src/app/core/services/appServices.service';
import { SessionDataService } from 'src/app/core/services/session-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(private _appService: AppService, private _formBuilder: FormBuilder,
    private _sessionDataService: SessionDataService, private _router: Router) {
    this.loginForm = this._formBuilder.group({
      userId: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }


  ngOnInit(): void {
  }



  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onLogin() {
    this.submitted = true;
    if (!this.loginForm.valid) {
      return;
    }

    this._appService.login(this.loginForm.value.userId, this.loginForm.value.password).subscribe((res: any) => {
      if (res && res.status === "success") {
        localStorage.setItem(AppConstants.PRISISTED_KEYS.IS_LOGGED_IN, JSON.stringify(true));
        localStorage.setItem(AppConstants.PRISISTED_KEYS.CURRENT_USER, JSON.stringify(res.data));
        this._sessionDataService.setcurrentUser(res.data);
        this._router.navigate(['/']);
      }
      else {
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 4000,
          title: 'Something went wrong!',
          icon: "error"
        });
      }
    })
  }

}
