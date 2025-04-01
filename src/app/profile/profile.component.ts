import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User as FirebaseUser } from 'firebase/auth';

interface User {
  photoURL?: string; 
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})


export class ProfileComponent implements OnInit{

  user$: Observable<User | null>; //code chage using chatgpt time 3.26 bonus 1
  // user$!: any; //code chage using chatgpt time 3.26 bonus 1
  

  constructor(private authService: AuthenticationService){
    this.user$ = this.authService.currentUser$ as Observable<User | null>;
  }
  ngOnInit(): void {
    this.user$ = this.authService.currentUser$;
  }

}
 