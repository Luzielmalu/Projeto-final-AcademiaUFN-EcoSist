import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAtualizarCadastroComponent } from './usuario-atualizar-cadastro.component';

describe('UsuarioAtualizarCadastroComponent', () => {
  let component: UsuarioAtualizarCadastroComponent;
  let fixture: ComponentFixture<UsuarioAtualizarCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioAtualizarCadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioAtualizarCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
