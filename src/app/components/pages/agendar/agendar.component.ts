import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrl: './agendar.component.css'
})
export class AgendarComponent {
  @Input() btnText: any='Enviar'
}
