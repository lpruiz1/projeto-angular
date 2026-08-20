import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService, Student } from '../services/students';
import { CardComponent } from '../card-component/card-component';

@Component({
  selector: 'app-student-details',
  imports: [CardComponent],
  templateUrl: './student-details.html',
  styleUrl: './student-details.scss',
})
export class StudentDetails implements OnInit {

  private studentsService = inject(StudentsService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  student = signal<Student | undefined>(undefined);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.student.set(this.studentsService.findById(id));
    }
  }

  goToEdit(): void {
    const current = this.student();
    if (current) {
      this.router.navigate(['/students', current.id, 'edit']);
    }
  }

  goBack(): void {
    this.router.navigate(['/students']);
  }
}
