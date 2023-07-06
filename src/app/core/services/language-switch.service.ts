import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageSwitchService {
  english: string = 'en';
  arabic: string = 'ar';

  constructor(private _translate: TranslateService) {}

  defaultLanguage() {
    if (!localStorage.getItem('language')) {
      this._translate.setDefaultLang(this.english);
      this._translate.use(this.english);
      localStorage.setItem('language', this.english);
    } else {
      let lang = localStorage.getItem('language') || '';      
      this._translate.setDefaultLang(lang);
      this._translate.use(lang);
      this._translate.use(lang);
    }
  }

  switchLanguage() {
    let lang = localStorage.getItem('language');
    if (lang === this.english) {
      this._translate.use(this.arabic);
      localStorage.setItem('language', this.arabic);
    } else {
      this._translate.use(this.english);
      localStorage.setItem('language', this.english);
    }
  }
}
