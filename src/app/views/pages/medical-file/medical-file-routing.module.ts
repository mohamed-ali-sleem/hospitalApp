import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalFileComponent } from './medical-file.component';

const routes: Routes = [
  {
    path: '',
    component: MedicalFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalFileRoutingModule { }
