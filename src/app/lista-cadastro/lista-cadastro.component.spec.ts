import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCadastroComponent } from './lista-cadastro.component';

describe('ListaCadastroComponent', () => {
  let component: ListaCadastroComponent;
  let fixture: ComponentFixture<ListaCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaCadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
