import { Injectable, signal } from '@angular/core';

export interface Student {
  id: number;
  registrationId: string;
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private studentsSignal = signal<Student[]>([]);
  private nextId = 1;

  readonly students = this.studentsSignal.asReadonly();
  
  add(registrationId: string, name: string, age: number): void{
    this.studentsSignal.update(list => [
      ...list,
      {id: this.nextId++, registrationId, name, age}
    ]);
  }
  
  update(id: number, registrationId: string, name: string, age: number): void {
    this.studentsSignal.update(list =>
      list.map(student =>
        student.id === id
        ? {...student, registrationId, name, age}
        : student
      )
    );
  }

  remove(id: number): void {
    this.studentsSignal.update(list =>
      list.filter(student => student.id !== id)
    );
  }

  findById(id: number): Student | undefined {
    return this.studentsSignal().find(student => student.id === id)
  }

  isRegistrationIdTaken(registrationId: string, ignoreId?: number): boolean {
    return this.studentsSignal().some(student =>
      student.registrationId === registrationId && student.id !== ignoreId
    );
  }
}
