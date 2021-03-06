import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/** The word must be in the word list */
export function wordNotInListValidator(stringList: String[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const notInList = !stringList.includes((control.value||"").toLowerCase());
    return notInList ? {wordNotInList: {value: control.value}} : null;
  };
}

/** The word must be in the word list */
export function wordInListValidator(stringList: String[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const InList = stringList.includes((control.value||"").toLowerCase());
    return InList ? {wordNotInList: {value: control.value}} : null;
  };
}
