import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-form.html',
  styleUrl: './register-form.scss',
})
export class RegisterForm {
  registerForm = new FormGroup(
    {
      //simple control
      userName: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)],
        asyncValidators: [this.usernameTakenValidator],
        updateOn: 'blur',
      }),

      password: new FormControl('', [Validators.required, Validators.minLength(6)]),

      confirmPassword: new FormControl('', [Validators.required]),

      //nested group
      address: new FormGroup({
        city: new FormControl('', Validators.required),
        zip: new FormControl('', Validators.required),
      }),
    },
    { validators: this.passwordMatchValidator },
  );

  //new Formgroup({..})
  //Creates from container

  //username: new FormControl('',{..})
  //first param = initial value
  //second param = object config

  //validators:[]
  //sync validators

  //asyncValidators:[]
  //Runs after sync validators pass

  //updateOn: 'blur'
  //Validation runs only when input loses focus
  //Options: change(default), blur, submit

  //Nested Group
  //address: new Formgroup({..}) //Address is a sub-form inside main form
  //Access - this.registerForm.get('address.city')

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    if (password != confirm) {
      return { passwordMistmatch: true };
    }
    return null;
  }

  //group = entire FormGroup
  //compare values
  //return error object if invalid
  //return null if valid
  //angular adds error to form
  //this.registerForm.errors?.['passwordMismatch]

  usernameTakenValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    const takenUsernames = ['admin', 'test', 'root'];

    return of(takenUsernames.includes(control.value)).pipe(
      delay(1000), // simulate server delay
      map((isTaken) => (isTaken ? { usernameTaken: true } : null)),
    );
  }
  //meaning
  //simulate API call
  //if username exists -->error
  //if not -->null

  onSubmit() {
    console.warn(this.registerForm.value);
  }
}
