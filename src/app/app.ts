import { Component, signal } from '@angular/core';
import { CrudAlunos } from './crud-alunos/crud-alunos';
import { CardComponent } from "./card-component/card-component";

@Component({
  selector: 'app-root',
  imports: [CrudAlunos, CardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-angular');
}
