import { Component } from '@angular/core';
import { AppService } from 'src/app/core/services/appServices.service';
import Swal from 'sweetalert2';
import SwiperCore, { SwiperOptions, Autoplay } from 'swiper'; // install Swiper modules
SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  doctors: any[] = [];
  departments: any[] = [];
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: true,
  };

  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    this.loadDoctors();
    this.loadDeparments();
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
