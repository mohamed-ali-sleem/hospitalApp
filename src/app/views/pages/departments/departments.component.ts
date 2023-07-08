import { Component } from '@angular/core';
import { AppService } from 'src/app/core/services/appServices.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {
  departments: any[] = [];

  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    this.loadDeparments();
  }

  loadDeparments() {
    this._appService.loadDeparments().subscribe(
      (data: any) => {
        if (data && data.status === "success") {
          this.departments = data.data;
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
