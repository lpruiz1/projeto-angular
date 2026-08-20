import { Routes } from '@angular/router';
import { StudentList } from './students-list/students-list';
import { StudentForm } from './students-form/students-form';
import { StudentDetails } from './student-details/student-details';

export const routes: Routes = [
    {path: '', redirectTo: 'students', pathMatch: 'full'},
    {path: 'students', component: StudentList},
    {path: 'students/new', component: StudentForm},
    {path: 'students/:id', component: StudentDetails},
    {path: 'students/:id/edit', component: StudentForm}
];
