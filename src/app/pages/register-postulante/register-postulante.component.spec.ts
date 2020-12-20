import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPostulanteComponent } from './register-postulante.component';

describe('RegisterPostulanteComponent', () => {
  let component: RegisterPostulanteComponent;
  let fixture: ComponentFixture<RegisterPostulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPostulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
