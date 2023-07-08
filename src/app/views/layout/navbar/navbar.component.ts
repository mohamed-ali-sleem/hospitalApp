import { Component, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageSwitchService } from 'src/app/core/services/language-switch.service';
import { AppService } from 'src/app/core/services/appServices.service';
import { AppConstants } from 'src/app/core/config/constants';
import { SessionDataService } from 'src/app/core/services/session-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  currentUser!: any;
  userImage: any;
  notifications: any[] = [];
  showNotificationAlert: boolean = false
  menuOpened: boolean = false;

  userSubscription: Subscription;

  constructor(private _appService: AppService, public _translate: TranslateService,
    public _sessionDataService: SessionDataService,
    private _renderer: Renderer2, private _languageSwitchService: LanguageSwitchService,) {
      this.userSubscription = this._sessionDataService.currentUser.subscribe((x) => (
        this.currentUser = x));
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    document.getElementById("navbar-area-id")?.classList.add("is-sticky");

    if (window.pageYOffset == 0) {
      document.getElementById("navbar-area-id")?.classList.remove('is-sticky');
    }
  }

  ngOnInit() {
  }

  logout(): void {
    this._appService.logout();
    this._sessionDataService.setcurrentUser(null);
  }

  async switchLanguage() {
    await this._languageSwitchService.switchLanguage();
    if (localStorage.getItem('language') === 'ar') {
      this._translate.use('ar');
      this._renderer.setAttribute(document.documentElement, 'lang', 'ar');
      this._renderer.setAttribute(document.body, 'dir', 'rtl');
      window.location.reload();
    } else {
      this._translate.use('en');
      this._renderer.setAttribute(document.documentElement, 'lang', 'en');
      this._renderer.setAttribute(document.body, 'dir', 'ltr');
      window.location.reload();
    }
    // return false;
  }


}
