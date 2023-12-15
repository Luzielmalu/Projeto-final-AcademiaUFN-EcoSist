import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgendarComponent } from './form-agendar.component';

describe('FormAgendarComponent', () => {
  let component: FormAgendarComponent;
  let fixture: ComponentFixture<FormAgendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAgendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAgendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
