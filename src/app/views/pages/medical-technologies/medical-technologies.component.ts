import { Component } from '@angular/core';

@Component({
  selector: 'app-medical-technologies',
  templateUrl: './medical-technologies.component.html',
  styleUrls: ['./medical-technologies.component.scss']
})
export class MedicalTechnologiesComponent {

  medTechs = [
    {
      name: 'Medical Technology 1',
      description: 'Medical Technology 1 description',
      image: '/assets/images/medical-technologies/medical-technologies-1.png'
    },
    {
      name: 'Medical Technology 2',
      description: 'Medical Technology 2 description',
      image: '/assets/images/medical-technologies/medical-technologies-2.png'
    },
    {
      name: 'Medical Technology 3',
      description: 'Medical Technology 3 description',
      image: '/assets/images/medical-technologies/medical-technologies-3.png'
    },
    {
      name: 'Medical Technology 4',
      description: 'Medical Technology 4 description',
      image: '/assets/images/medical-technologies/medical-technologies-4.png'
    },
    {
      name: 'Medical Technology 5',
      description: 'Medical Technology 5 description',
      image: '/assets/images/medical-technologies/medical-technologies-5.png'
    },
    {
      name: 'Medical Technology 6',
      description: 'Medical Technology 6 description',
      image: '/assets/images/medical-technologies/medical-technologies-6.png'
    },
    {
      name: 'Medical Technology 7',
      description: 'Medical Technology 7 description',
      image: '/assets/images/medical-technologies/medical-technologies-7.png'
    },
    {
      name: 'Medical Technology 8',
      description: 'Medical Technology 8 description',
      image: '/assets/images/medical-technologies/medical-technologies-8.png'
    }
  ];
}
