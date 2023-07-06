import { Component, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authenticationService.service';
import { LanguageSwitchService } from 'src/app/core/services/language-switch.service';

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
  constructor(private _authenticationService: AuthenticationService, public _translate: TranslateService,
    private _renderer: Renderer2, private _languageSwitchService: LanguageSwitchService,) {
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
    this._authenticationService.logout();
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