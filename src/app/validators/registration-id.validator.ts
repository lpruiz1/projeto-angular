import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { StudentsService } from "../services/students";

export function uniqueRegistrationIdValidator (
    studentsService: StudentsService,
    currentStudentId?: string | null 
): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if (!value) return null;

        const isTaken = studentsService.isRegistrationIdTaken(value, currentStudentId ?? undefined);
        return isTaken ? {registrationIdTaken: true} : null;
    };
}