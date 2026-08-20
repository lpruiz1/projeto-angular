import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-age-badge',
  imports: [],
  templateUrl: './age-badge.html',
  styleUrl: './age-badge.scss',
})
export class AgeBadge {
  age = input.required<number>();

  category = computed(() => {
    const value = this.age();
    if (value < 13) return 'Criança';
    if (value < 18) return 'Adolescente';
    return 'Adulto';
  });

  cssClass = computed(() => {
    const value = this.age();
    if (value < 13) return 'badge-child';
    if (value < 18) return 'badge-teen';
    return 'badge-adult';
  });
}