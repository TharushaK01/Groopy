import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Observable, OperatorFunction } from 'rxjs';
import { pipe } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { UsersService } from '../services/users.service';


export function passwordsMatchValidator(): ValidatorFn {
  return ( control: AbstractControl): ValidationErrors | null => {
    const password = control.get ('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return {
        passwordDontMatch : true
      }
    }

    return null;
  };
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit{

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, { validators: passwordsMatchValidator()})
  usersService: any;


  constructor(private authService: AuthenticationService, private toast: HotToastService, private router: Router, usersService: UsersService){}
  ngOnInit(): void {
      
  }

  get name() {
    return this.signUpForm.get('name');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }
  submit(){
    if (!this.signUpForm.valid) return;

    const { name, email, password } =  this.signUpForm.value;
    this.authService.signUp(email as string, password as string).pipe(
      switchMap(({ user: { uid }})=> this.usersService.addUser({ uid, email, displayName: name})),
      this.toast.observe({
        success: 'Congrats! You are all signed up',
        loading: 'Signing in',
        error: ({ message }) => `${message}`
      })
    ).subscribe(()=> {
      this.router.navigate(['/home']);
    })
  }
}
