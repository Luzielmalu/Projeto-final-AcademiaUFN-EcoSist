import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcopontosComponent } from './ecopontos.component';

describe('EcopontosComponent', () => {
  let component: EcopontosComponent;
  let fixture: ComponentFixture<EcopontosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EcopontosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcopontosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
