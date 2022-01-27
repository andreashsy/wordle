import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';



/** The word must have n letters */
export function wordNotInListValidator(stringList: String[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const notInList = !stringList.includes(control.value); 
    return notInList ? {wordNotInList: {value: control.value}} : null;
  };
}
