import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface Student {
  id: string;
  registrationId: string;
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/students';

  private studentsSignal = signal<Student[]>([]);
  readonly students = this.studentsSignal.asReadonly();

  loadStudents(): void {
    this.http.get<Student[]>(this.apiUrl).subscribe(students => {
      this.studentsSignal.set(students);
    });
  }

  add(registrationId: string, name: string, age: number): Observable<Student> {
    const newStudent = { registrationId, name, age };
    return this.http.post<Student>(this.apiUrl, newStudent).pipe(
      tap(created => {
        this.studentsSignal.update(list => [...list, created]);
      })
    );
  }

  findById(id: string): Student | undefined {
    return this.studentsSignal().find(student => student.id === id);
  }

  isRegistrationIdTaken(registrationId: string, ignoreId?: string): boolean {
    return this.studentsSignal().some(student =>
      student.registrationId === registrationId && student.id !== ignoreId
    );
  }

  update(id: string, registrationId: string, name: string, age: number): Observable<Student> {
    const updatedStudent = { id, registrationId, name, age };
    return this.http.put<Student>(`${this.apiUrl}/${id}`, updatedStudent).pipe(
      tap(updated => {
        this.studentsSignal.update(list => list.map(s => s.id === id ? updated : s));
      })
    );
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        this.studentsSignal.update(list => list.filter(s => s.id !== id));
      })
    );
  }
}