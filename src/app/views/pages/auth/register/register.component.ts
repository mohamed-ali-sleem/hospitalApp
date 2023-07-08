import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/core/config/constants';
import { AppService } from 'src/app/core/services/appServices.service';
import { SessionDataService } from 'src/app/core/services/session-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(private _appService: AppService, private _formBuilder: FormBuilder,
    private _sessionDataService: SessionDataService, private _router: Router) {
    this.registerForm = this._formBuilder.group({
      patientEmail: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
      patientPhone: ['', Validators.required],
      patientPassword: ['', Validators.required],
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
