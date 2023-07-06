import { Component } from '@angular/core';
import SwiperCore, { SwiperOptions, Autoplay } from 'swiper'; // install Swiper modules
SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: true,
  };
}
