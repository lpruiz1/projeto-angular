import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-reativo',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-reativo.html',
  styleUrl: './formulario-reativo.css',
})
export class FormularioReativo {

  //obj de formulário
  pessoa = new FormGroup({
    nome: new FormControl(),
    idade: new FormControl(),
    peso: new FormControl(),
    altura: new FormControl()
  });

  //controla o tema
  corFonte:string = '#222'
  corFundo:string = '#f5f5f5'

  estiloForm = {
    'color': this.corFonte,
    'background-color': this.corFundo
  }

  alterarEstilo ():void {
    this.corFonte = this.corFonte === '#222' ? '#fff' : '#222'
    this.corFundo = this.corFundo === '#f5f5f5' ? '#2c2c2c' : '#f5f5f5'

    this.estiloForm ={
      'color': this.corFonte,
      'background-color': this.corFundo
    }
  }

  get formCompleto():boolean {
    const verifica = this.pessoa.value
    return !!(verifica.nome && verifica.idade && verifica.peso && verifica.altura)
  }
}
