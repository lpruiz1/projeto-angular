import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-diretiva-class',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './diretiva-class.html',
  styleUrl: './diretiva-class.css',
})
export class DiretivaClass {
  alunos:string[] = ['aprovado', 'aprovado', 'reprovado', 'aprovado']
}
