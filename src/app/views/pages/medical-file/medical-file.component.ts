import { Component } from '@angular/core';
import { AppConstants } from 'src/app/core/config/constants';
import { AppService } from 'src/app/core/services/appServices.service';

@Component({
  selector: 'app-medical-file',
  templateUrl: './medical-file.component.html',
  styleUrls: ['./medical-file.component.scss']
})
export class MedicalFileComponent {

  currentUser: any = JSON.parse(localStorage.getItem(AppConstants.PRISISTED_KEYS.CURRENT_USER) || '{}');

  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    this.loadAppointments();
  }



  loadAppointments() {
    this._appService.loadAppointments(this.currentUser.patient_id).subscribe((res: any) => {
      console.log(res);
    })
  }

}
