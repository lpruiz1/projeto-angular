import { Component } from '@angular/core';
import { ApresentacaoDirective } from '../minha-diretiva/apresentacao';


@Component({
  selector: 'app-diretiva-customizada',
  imports: [ApresentacaoDirective],
  templateUrl: './diretiva-customizada.html',
  styleUrl: './diretiva-customizada.css',
})
export class DiretivaCustomizada {

}
