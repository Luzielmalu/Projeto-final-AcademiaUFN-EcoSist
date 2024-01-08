import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistrarComponent } from './form-registrar.component';

describe('FormRegistrarComponent', () => {
  let component: FormRegistrarComponent;
  let fixture: ComponentFixture<FormRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormRegistrarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
