import { Component } from '@angular/core';
import { AppConstants } from 'src/app/core/config/constants';
import { AppService } from 'src/app/core/services/appServices.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medical-file',
  templateUrl: './medical-file.component.html',
  styleUrls: ['./medical-file.component.scss']
})
export class MedicalFileComponent {

  currentUser: any = JSON.parse(localStorage.getItem(AppConstants.PRISISTED_KEYS.CURRENT_USER) || '{}');
  appointments: any[] = [];
  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    this.loadAppointments();
  }



  loadAppointments() {
    this._appService.loadAppointments(this.currentUser.patient_id).subscribe((res: any) => {
      if (res && res.status === "success") {
        this.appointments = res.data;
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
    })
  }


  deleteAppointment(appointment: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: `You want to delete appointment ${appointment.appointment_date} at ${appointment.appointment_time}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it!',

    }).then((result) => {
      if (result.isConfirmed) {
        this._appService.deleteAppointment(appointment.appointment_id).subscribe((res: any) => {
          if (res && res.status === "success") {
            Swal.fire(
              'Deleted!',
              'Your appointment has been deleted.',
              'success'
            );
            this.loadAppointments();
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
        })
      }
    })
  }


  updateAppointment(appointment: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: `You want to update appointment ${appointment.appointment_date} at ${appointment.appointment_time}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, update it!',
      cancelButtonText: 'No, keep it!',

    }).then((result) => {
      if (result.isConfirmed) {
        this._appService.updateAppointment(appointment.appointment_id).subscribe((res: any) => {
          if (res && res.status === "success") {
            Swal.fire(
              'Updated!',
              'Your appointment has been updated.',
              'success'
            );
            this.loadAppointments();
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
        })
      }
    })
  }
}
