import {Directive, OnInit} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS, // This is approach is used cause angular is already having a validation system for forms and we are just adding ours to it.
      useExisting: EmailValidatorDirective,
      multi: true // appending ours to what is already there.
    }
  ]
})
export class EmailValidatorDirective implements Validator {

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
        const value: string = control.value as string;
        if (value.includes("test")){
          return {invalidCruiserMail: true}
        }
        return null;
    }

}
