import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppConstants } from 'src/app/core/config/constants';
import { AppService } from 'src/app/core/services/appServices.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup;
  submitted: boolean = false;



  constructor(private _appService: AppService, private _formBuilder: FormBuilder) {
    this.registerForm = this._formBuilder.group({
      userId: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      userPhone: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onRegisterUser() {
    this.submitted = true;
    if (!this.registerForm.valid) {
      return;
    }

    this._appService.registerUser(this.registerForm.value).subscribe((res: any) => {
      if (res && res.status === 200) {
        localStorage.setItem(AppConstants.PRISISTED_KEYS.IS_LOGGED_IN, JSON.stringify(true));
        localStorage.setItem(AppConstants.PRISISTED_KEYS.CURRENT_USER, JSON.stringify(res.user));
      }
    })
  }

}
