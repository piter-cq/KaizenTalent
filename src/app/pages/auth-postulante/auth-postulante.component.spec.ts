import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPostulanteComponent } from './auth-postulante.component';

describe('AuthPostulanteComponent', () => {
  let component: AuthPostulanteComponent;
  let fixture: ComponentFixture<AuthPostulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthPostulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
