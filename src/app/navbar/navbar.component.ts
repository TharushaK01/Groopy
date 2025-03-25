import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    constructor(public authService: AuthenticationService, private router:Router) {
      
    }
    logout() {
      this.authService.logout().subscribe(() => {
        this.router.navigate(['']);
  
      });
    }

}
