import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  imagem:string = "anor-londo-p.webp"

  alterarImagem():void{
    this.imagem = this.imagem == "anor-londo-p.webp" ? "anor-londo_pr.jpg" : "anor-londo-p.webp"
  }
}
