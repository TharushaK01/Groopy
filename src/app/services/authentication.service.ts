import { Injectable } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword, updateProfile, UserInfo } from '@angular/fire/auth';
import { of, from, Observable, switchMap, pipe, concat, concatMap } from 'rxjs';


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
  signUp(name: string, email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap(({ user }) => updateProfile(user, {displayName: name}))
    );
  }

  updateProfileData(profileData: Partial<UserInfo>): Observable<any>{
    const user =  this.auth.currentUser;
    return of(user).pipe(
      concatMap(user => {
        if (!user) throw new Error('Not Authenticated');

        return updateProfile(user, profileData);
      })
    )
  }

  logout(){
    return from(this.auth.signOut());
  }
}
