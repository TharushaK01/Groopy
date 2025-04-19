import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { ProfileUser } from '../models/user-profile';
import { concatMap, map, Observable, take } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(private firestore: Firestore, private usersService: UsersService) { }

  createChat(otherUser: ProfileUser): Observable<string>{
    const ref = collection(this.firestore, 'chats');
    return this.usersService.currentUserProfile$.pipe(
      take(1),
      concatMap(user => addDoc(ref, {
        userIds: [user?.uid, otherUser?.uid],
        users: [
          {
            displayName: user?.displayName ?? '',
            photoURL: user?.photoURL ??''
          },
          {
              displayName: otherUser?.displayName ?? '',
            photoURL: otherUser?.photoURL ??''
          },
        ]
      })),
      map(ref => ref.id)
    )
  }
}
