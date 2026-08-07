// Importações
import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

// Define a diretiva com o seletor [apresentacao]
// O Angular usa esse seletor para aplicar a diretiva no HTML
@Directive({
  selector: '[apresentacao]'
})

// Classe
export class ApresentacaoDirective implements OnChanges {

  // Recebe o valor do HTML, por exemplo: [apresentacao]="'Ana'"
  @Input('apresentacao') nome: string = '';

  // Injeção de dependências: ElementRef para acessar o elemento,
  // Renderer2 para alterar o DOM de forma segura
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Executa sempre que houver mudanças
  ngOnChanges(changes: SimpleChanges): void {
    if (this.nome) {
      // Altera o conteúdo do elemento para "Olá Ana!", por exemplo
      this.renderer.setProperty(this.el.nativeElement, 'textContent', `Olá ${this.nome}!`);
    }
  }
}