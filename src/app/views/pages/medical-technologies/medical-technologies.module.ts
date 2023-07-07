import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalTechnologiesRoutingModule } from './medical-technologies-routing.module';
import { MedicalTechnologiesComponent } from './medical-technologies.component';


@NgModule({
  declarations: [
    MedicalTechnologiesComponent
  ],
  imports: [
    CommonModule,
    MedicalTechnologiesRoutingModule
  ]
})
export class MedicalTechnologiesModule { }
