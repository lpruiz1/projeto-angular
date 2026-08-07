import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-style',
  imports: [CommonModule],
  templateUrl: './diretiva-style.html',
  styleUrl: './diretiva-style.css',
})
export class DiretivaStyle {
  corFonte:string = 'yellow';
  corFundo:string = 'black';

  estiloTexto = {
    'color': this.corFonte,
    'background-color': this.corFundo
  }

  alterarEstilos():void{
    this.corFonte = this.corFonte === 'yellow' ? 'blue' : 'yellow'
    this.corFundo = this.corFundo == 'black' ? 'red' : 'black'

    this.estiloTexto = {
      'color': this.corFonte,
      'background-color': this.corFundo
    }
  }
}
