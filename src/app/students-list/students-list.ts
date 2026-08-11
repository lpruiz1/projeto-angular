import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StudentsService } from '../services/students';
import { CardComponent } from '../card-component/card-component';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, CardComponent, ConfirmDialog],
  templateUrl: './students-list.html',
  styleUrl: './students-list.css',
})
export class StudentList {

  private studentsService = inject(StudentsService);
  private router = inject(Router);

  readonly students = this.studentsService.students;

  studentIdPendingDeletion = signal<number | null>(null);

  edit(id: number): void {
    this.router.navigate(['/students', id, 'edit']);
  }

  askToRemove(id: number): void {
    this.studentIdPendingDeletion.set(id);
  }

  confirmRemoval(): void {
    const id = this.studentIdPendingDeletion();
    if (id !== null) {
      this.studentsService.remove(id);
    }
    this.studentIdPendingDeletion.set(null);
  }

  cancelRemoval(): void {
    this.studentIdPendingDeletion.set(null);
  }

  goToNewStudent(): void {
    this.router.navigate(['/students/new']);
  }
}