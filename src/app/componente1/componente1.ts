import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  imports: [],
  templateUrl: './componente1.html',
  styleUrl: './componente1.css',
})
export class Componente1 {
  nome:string = "Lucas";
  media:number = 8;
  pessoa = {
    nome: 'Lucas',
    idade: 95
  }

  mensagem():string{
    return 'Boa tarde Lucas!'
  }
}
