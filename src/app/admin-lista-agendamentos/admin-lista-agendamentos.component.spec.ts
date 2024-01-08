import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListaAgendamentosComponent } from './admin-lista-agendamentos.component';

describe('AdminListaAgendamentosComponent', () => {
  let component: AdminListaAgendamentosComponent;
  let fixture: ComponentFixture<AdminListaAgendamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminListaAgendamentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminListaAgendamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
