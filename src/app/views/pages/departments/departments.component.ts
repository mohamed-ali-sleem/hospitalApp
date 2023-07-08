import { Component } from '@angular/core';
import { AppService } from 'src/app/core/services/appServices.service';

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
        this.departments = data.data;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
}
