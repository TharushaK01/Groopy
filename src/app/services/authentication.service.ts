import { Injectable } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword } from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser$: any;
  
  constructor(private auth: Auth) { 
    this.  currentUser$ = authState(this.auth);
  }

  login(username: string, password: string){
   return from(signInWithEmailAndPassword(this.auth, username, password));
  }
  logout(){
    return from(this.auth.signOut());
  }
}
