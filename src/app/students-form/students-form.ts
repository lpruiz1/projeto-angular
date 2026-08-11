import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../services/students';
import { uniqueRegistrationIdValidator } from '../validators/registration-id.validator';
import { CardComponent } from '../card-component/card-component';

@Component({
  selector: 'app-student-form',
  imports: [CommonModule, ReactiveFormsModule, CardComponent],
  templateUrl: './students-form.html',
  styleUrl: './students-form.css',
})
export class StudentForm implements OnInit {

  private studentsService = inject(StudentsService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  studentIdInEdition: number | null = null;

  form = new FormGroup({
    registrationId: new FormControl<string | null>('', [
      Validators.required,
      uniqueRegistrationIdValidator(this.studentsService)
    ]),
    name: new FormControl<string | null>('', Validators.required),
    age: new FormControl<number | null>(null, Validators.required),
  });

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const student = this.studentsService.findById(Number(idParam));
      if (student) {
        this.studentIdInEdition = student.id;

        this.form.get('registrationId')?.setValidators([
          Validators.required,
          uniqueRegistrationIdValidator(this.studentsService, student.id)
        ]);
        this.form.get('registrationId')?.updateValueAndValidity();

        this.form.setValue({
          registrationId: student.registrationId,
          name: student.name,
          age: student.age,
        });
      }
    }
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { registrationId, name, age } = this.form.value;

    if (this.studentIdInEdition !== null) {
      this.studentsService.update(this.studentIdInEdition, registrationId!, name!, age!);
    } else {
      this.studentsService.add(registrationId!, name!, age!);
    }

    this.router.navigate(['/students']);
  }

  cancel(): void {
    this.router.navigate(['/students']);
  }
}