import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentsService, Student } from '../services/students';
import { uniqueRegistrationIdValidator } from '../validators/registration-id.validator';

@Component({
  selector: 'app-crud-alunos',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crud-alunos.html',
  styleUrl: './crud-alunos.css',
})
export class CrudAlunos {

  private studentsService = inject(StudentsService);

  readonly students = this.studentsService.students;

  studentIdInEdition: number | null = null;

  form = new FormGroup({
    registrationId: new FormControl<string | null>('', [
      Validators.required,
      uniqueRegistrationIdValidator(this.studentsService)
    ]),
    name: new FormControl<string | null>('', Validators.required),
    age: new FormControl<number | null>(null, Validators.required),
  });

  save(): void {
    if (this.form.invalid) return;

    const { registrationId, name, age } = this.form.value;

    if (this.studentIdInEdition !== null) {
      this.studentsService.update(
        this.studentIdInEdition,
        registrationId!,
        name!,
        age!
      );
      this.studentIdInEdition = null;
    } else {
      this.studentsService.add(registrationId!, name!, age!);
    }

    this.resetRegistrationValidator();
    this.form.reset();
  }

  edit(student: Student): void {
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

  remove(id: number): void {
    this.studentsService.remove(id);
    if (this.studentIdInEdition === id) {
      this.cancelEdition();
    }
  }

  cancelEdition(): void {
    this.studentIdInEdition = null;
    this.resetRegistrationValidator();
    this.form.reset();
  }

  private resetRegistrationValidator(): void {
    this.form.get('registrationId')?.setValidators([
      Validators.required,
      uniqueRegistrationIdValidator(this.studentsService)
    ]);
    this.form.get('registrationId')?.updateValueAndValidity();
  }
}