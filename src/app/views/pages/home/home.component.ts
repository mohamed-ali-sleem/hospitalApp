import { Component } from '@angular/core';
import { AppService } from 'src/app/core/services/appServices.service';
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

  constructor(private _appService: AppService ) { }

  ngOnInit(): void {
    this.loadDoctors();
    this.loadDeparments();
  }

  // LOAD DOCTORS LIST
  loadDoctors() {
    this._appService.loadDoctors().subscribe(
      (data: any) => {
        this.doctors = data.data;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  loadDeparments() {
    this._appService.loadDeparments().subscribe(
      (data: any) => {
        this.departments = data.data;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
}
