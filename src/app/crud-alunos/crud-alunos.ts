import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardComponent } from '../card-component/card-component';

interface Aluno {
  id:number;
  nome:string;
  idade:number;
}

@Component({
  selector: 'app-crud-alunos',
  imports: [CommonModule, ReactiveFormsModule, CardComponent],
  templateUrl: './crud-alunos.html',
  styleUrl: './crud-alunos.css',
})
export class CrudAlunos {

  alunos:Aluno[] = [];
  proximoId:number = 1;
  idEdicao:number | null = null;

  form = new FormGroup({
    nome: new FormControl<string | null> ('', Validators.required),
    idade: new FormControl<number | null> (null, Validators.required)
  })

  salvar():void {
    if (this.form.invalid) return;

    const { nome, idade } = this.form.value;

    if (this.idEdicao !== null) {
      const aluno = this.alunos.find(a => a.id === this.idEdicao);
      if (aluno) {
        aluno.nome = nome!;
        aluno.idade = idade!;
      }
      this.idEdicao = null;
    } else {
      this.alunos.push({
        id: this.proximoId++,
        nome: nome!,
        idade: idade!,
      });
    }

    this.form.reset();
  }

  editar(aluno:Aluno):void {
    this.idEdicao = aluno.id;
    this.form.setValue({
      nome: aluno.nome,
      idade: aluno.idade
    });
  }

  remover(id:number):void {
    this.alunos = this.alunos.filter(a => a.id !== id);
    if (this.idEdicao === id){
      this.cancelarEdicao()
    }
  }

  cancelarEdicao(): void{
    this.idEdicao = null;
    this.form.reset();
  }
}
