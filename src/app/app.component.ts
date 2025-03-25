import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Groopy';
  constructor(public authService: AuthenticationService, private router:Router) {
    
  }
  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['']);

    });
  }
}
