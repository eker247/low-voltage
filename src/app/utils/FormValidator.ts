import { AbstractControl } from '@angular/forms';

export class FormValidator {
  static notEmpty() {
    return (ctrl: AbstractControl) =>
      (ctrl.value as string).trim().length ? null : { notEmpty: true };
  }
}
