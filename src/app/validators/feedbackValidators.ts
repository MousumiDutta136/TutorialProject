import { AbstractControl } from '@angular/forms';


  export function ValidateFN(control: AbstractControl): {[key: string]: any} | null  {
    const NamePattern = /^[a-zA-Z]{1,15}$/;
      if (control.value && NamePattern.test(control.value)==false ){
        return { 'firstnameInvalid': true };
      }
      return null;
    }
    export function ValidateLN(control: AbstractControl): {[key: string]: any} | null  {
      const NamePattern = /^[a-zA-Z]{1,15}$/;
      if (control.value && NamePattern.test(control.value)==false ){
        return { 'lastnameInvalid': true };
      }
      return null;
    }
   
        export function ValidateCity(control: AbstractControl): {[key: string]: any} | null  {
          const NamePattern = /^[a-zA-Z]{1,15}$/;
          if (control.value && NamePattern.test(control.value)==false ){
            return { 'cityInvalid': true };
          }
          return null;
        }
          export function ValidateCountry(control: AbstractControl): {[key: string]: any} | null  {
            const NamePattern = /^[a-zA-Z]{1,15}$/;
            if (control.value && NamePattern.test(control.value)==false ){
              return { 'countryInvalid': true };
            }
            return null;
          }
        export function ValidateEmail(control: AbstractControl): {[key: string]: any} | null  {
          const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
            if (control.value && emailPattern.test(control.value)==false ) {
              return { 'emailInvalid': true };
            }
            return null;
          }
export function ValidatePhone(control: AbstractControl): {[key: string]: any} | null  {
  const emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    if (control.value && control.value.length != 10) {
      return { 'phoneNumberInvalid': true };
    }
    return null;
  }