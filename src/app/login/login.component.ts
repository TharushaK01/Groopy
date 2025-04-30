import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginform = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', Validators.required)
})
hidePassword: boolean = true; 
  constructor(private authService: AuthenticationService, private router: Router, private toast: HotToastService){}
  ngOnInit(): void {
      
  }
get email() {
  return this.loginform.get('email');
}
get password() {
  return this.loginform.get('password');
}
submit(){
  if (!this.loginform.valid) {
    return;
  }

  const { email, password } = this.loginform.value;
  this.authService.login(email as string, password as string).pipe(
    this.toast.observe({
      success: 'Logged in successfully',
      loading: 'Logging in...',
      error: 'There was an error'
    })
  ) .subscribe(() => {
    this.router.navigate(['/home']);
  });
 }
}