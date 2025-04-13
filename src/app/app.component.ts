import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { UsersService } from './services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Groopy';
  user$: Observable<any>;


  constructor(public authService: AuthenticationService, 
    private router:Router,
    private usersService: UsersService) {
    this.user$ = this.usersService.currentUserProfile$;
  }
  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['']);

    });
  }
}
