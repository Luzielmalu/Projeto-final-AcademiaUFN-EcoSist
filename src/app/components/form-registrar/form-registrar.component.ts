import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-registrar',
  templateUrl: './form-registrar.component.html',
  styleUrl: './form-registrar.component.css'
})
export class FormRegistrarComponent {
@Input() btnText: any;
}
