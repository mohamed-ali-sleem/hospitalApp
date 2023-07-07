import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalTechnologiesComponent } from './medical-technologies.component';

describe('MedicalTechnologiesComponent', () => {
  let component: MedicalTechnologiesComponent;
  let fixture: ComponentFixture<MedicalTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalTechnologiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
