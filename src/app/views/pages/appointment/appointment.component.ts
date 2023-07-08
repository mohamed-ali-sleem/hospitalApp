import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppConstants } from 'src/app/core/config/constants';
import { AppService } from 'src/app/core/services/appServices.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {

  doctors: any[] = [];
  currentUser: any = JSON.parse(localStorage.getItem(AppConstants.PRISISTED_KEYS.CURRENT_USER) || '{}');

  appointmentForm: FormGroup;
  submitted: boolean = false;

  constructor(private _appService: AppService, private _formBuilder: FormBuilder) {
    this.appointmentForm = this._formBuilder.group({
      date: ['', [Validators.required]],
      time: ['', Validators.required],
      doctorID: ['', Validators.required],
      patientID: [this.currentUser.patient_id]
    });
  }

  ngOnInit(): void {
    this.loadDoctors();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.appointmentForm.controls;
  }

  onAppointmentSubmit() {
    this.submitted = true;
    if (!this.appointmentForm.valid) {
      return;
    }


    this._appService.addAppointment(this.appointmentForm.value).subscribe((res: any) => {
      if (res && res.status === "success") {
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 4000,
          title: 'Appointment added successfully!',
          icon: "success"
        });
        this.appointmentForm.reset();
        this.f['patientID'].setValue(this.currentUser.patient_id);

        this.submitted = false;
      }
      else {
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 4000,
          title: 'Something went wrong!' + res.message,
          icon: "error"
        });
      }
    })
  }

  // LOAD DOCTORS LIST
  loadDoctors() {
    this._appService.loadDoctors().subscribe(
      (data: any) => {
        if (data && data.status === "success") {
          this.doctors = data.data;
        } else {
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000,
            title: 'Something went wrong!',
            icon: "error"
          });
        }
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

}
