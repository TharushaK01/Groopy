import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent  implements OnInit {

  userName$: Observable<string> | undefined; 
    constructor(public authService: AuthenticationService, private router:Router) {
      
    }
    ngOnInit() {
      
      this.userName$ = this.authService.currentUser$.pipe(
        map(user => {
          if (!user) return '';
          const firebaseUser = user as { displayName?: string; email?: string };
          return firebaseUser.displayName || firebaseUser.email || 'User';
        })
      );
    }
    getDisplayName(user: any): string {
      
      if (!user) return 'User';
      return user.displayName || user.email || 'User';
    }

    logout() {
      this.authService.logout().subscribe(() => {
        this.router.navigate(['']);
  
      });
    }

}
