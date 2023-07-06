import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Pipe({ name: 'convertFrom24To12Format' })
export class convertFrom24To12FormatPipe implements PipeTransform {
    constructor(private _translate: TranslateService) {

    }
    transform(time: any): string {
        if (!time) {
            return ''
        }
        let hour = (time.split(':'))[0];
        let min = (time.split(':'))[1];
        let part = hour > 12 ? this._translate.instant('HOME.PM') : this._translate.instant('HOME.AM');
        min = (min + '').length == 1 ? `0${min}` : min;
        hour = hour > 12 ? hour - 12 : hour;
        hour = (hour + '').length == 1 ? `0${hour}` : hour;
        return `${hour}:${min} ${part}`
    }
}