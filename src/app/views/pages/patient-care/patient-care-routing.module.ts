import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientCareComponent } from './patient-care.component';

const routes: Routes = [
  {
    path: '',
    component: PatientCareComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientCareRoutingModule { }
