import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StudentsService } from '../services/students';
import { CardComponent } from '../card-component/card-component';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, CardComponent],
  templateUrl: './students-list.html',
  styleUrl: './students-list.css',
})
export class StudentList {

  private studentsService = inject(StudentsService);
  private router = inject(Router);

  readonly students = this.studentsService.students;

  edit(id: number): void {
    this.router.navigate(['/students', id, 'edit']);
  }

  remove(id: number): void {
    this.studentsService.remove(id);
  }

  goToNewStudent(): void {
    this.router.navigate(['/students/new']);
  }
}