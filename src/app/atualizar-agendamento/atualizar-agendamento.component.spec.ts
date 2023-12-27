import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarAgendamentoComponent } from './atualizar-agendamento.component';

describe('AtualizarAgendamentoComponent', () => {
  let component: AtualizarAgendamentoComponent;
  let fixture: ComponentFixture<AtualizarAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtualizarAgendamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtualizarAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
