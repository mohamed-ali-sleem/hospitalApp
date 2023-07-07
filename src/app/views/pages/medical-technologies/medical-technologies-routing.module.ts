import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalTechnologiesComponent } from './medical-technologies.component';

const routes: Routes = [
  {
    path: '',
    component: MedicalTechnologiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalTechnologiesRoutingModule { }
