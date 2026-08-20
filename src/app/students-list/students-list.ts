import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { StudentsService } from '../services/students';
import { CardComponent } from '../card-component/card-component';
import { EmptyState } from '../empty-state/empty-state';
import { AgeBadge } from '../age-badge/age-badge';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, CardComponent, ConfirmDialog, EmptyState, AgeBadge, RouterLink],
  templateUrl: './students-list.html',
  styleUrl: './students-list.scss',
})
export class StudentList implements OnInit {

  private studentsService = inject(StudentsService);
  private router = inject(Router);

  readonly students = this.studentsService.students;

  studentIdPendingDeletion = signal<string | null>(null);

  ngOnInit(): void {
    this.studentsService.loadStudents();
  }

  edit(id: string): void {
    this.router.navigate(['/students', id, 'edit']);
  }

  askToRemove(id: string): void {
    this.studentIdPendingDeletion.set(id);
  }

  confirmRemoval(): void {
    const id = this.studentIdPendingDeletion();
    if (id !== null) {
      this.studentsService.remove(id).subscribe();
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