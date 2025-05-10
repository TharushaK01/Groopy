import { Injectable } from '@angular/core';
import { collection, collectionData, doc, docData, Firestore, setDoc, updateDoc, query } from '@angular/fire/firestore';
import { from, Observable, of, switchMap } from 'rxjs';
import { ProfileUser } from '../models/user-profile';
import { AuthenticationService } from './authentication.service';
import { User } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  get currentUserProfile$(): Observable<ProfileUser | null> {
    return this.authService.currentUser$.pipe(
      switchMap((user: User | null) => {
        
        if (!user?.uid) {
          return of(null);
        }
        const ref = doc(this.firestore, 'users', user?.uid);
        return docData(ref) as Observable<ProfileUser>;
      })
    );
  }

  get allUsers$(): Observable<ProfileUser[]> {
    const ref = collection(this.firestore, 'users');
    const queryAll = query(ref);
    return collectionData(queryAll) as Observable<ProfileUser[]>;
  }

  constructor(private firestore: Firestore, private authService: AuthenticationService) { }

  addUser(user: ProfileUser) : Observable<any>  {
    const ref = doc(this.firestore, 'users', user?.uid);
    return from(setDoc(ref,user));
  }

  updateUser(user: ProfileUser) : Observable<any>  {
    const ref = doc(this.firestore, 'users', user?.uid);
    return from(updateDoc(ref,{...user}));
  }
}
