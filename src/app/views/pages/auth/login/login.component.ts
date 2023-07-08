import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppConstants } from 'src/app/core/config/constants';
import { AppService } from 'src/app/core/services/appServices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  submitted: boolean = false;



  constructor(private _appService: AppService, private _formBuilder: FormBuilder) {
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
      if (res && res.status === 200) {
        localStorage.setItem(AppConstants.PRISISTED_KEYS.IS_LOGGED_IN, JSON.stringify(true));
        localStorage.setItem(AppConstants.PRISISTED_KEYS.CURRENT_USER, JSON.stringify(res.user));
      }
    })
  }

}
