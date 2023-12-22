import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListaCadastrosComponent } from './admin-lista-cadastros.component';

describe('AdminListaCadastrosComponent', () => {
  let component: AdminListaCadastrosComponent;
  let fixture: ComponentFixture<AdminListaCadastrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminListaCadastrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminListaCadastrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
