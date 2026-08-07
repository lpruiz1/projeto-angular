import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-controle-fluxo',
  imports: [CommonModule],
  templateUrl: './controle-fluxo.html',
  styleUrl: './controle-fluxo.css',
})
export class ControleFluxo {
  media:number = 8;
  linguagem:string = 'HTML';
  nomes:string[] = ['Lukinhas', 'Davi', 'Benevaldo'];
}
