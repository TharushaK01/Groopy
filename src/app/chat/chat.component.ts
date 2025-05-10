import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { combineLatest, map, Observable, pipe, startWith } from 'rxjs';
import { UsersService } from '../services/users.service';
import { ProfileUser } from '../models/user-profile';
import { ChatsService } from '../services/chats.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit{

  // user$ =this.usersService.currentUserProfile$;
  user$!: Observable<any>;
  users$!: Observable<any>; // 2/6 video 6.00s
  // users$ = this.usersService.allUsers$;
  // searchConrtol = new FormControl('')
  searchControl = new FormControl('');

  constructor(private usersService: UsersService, private chatsService: ChatsService){}

  ngOnInit(): void {
    this.user$ = this.usersService.currentUserProfile$;
    
    this.users$ = combineLatest([
      this.usersService.allUsers$, 
      this.user$,
      this.searchControl.valueChanges.pipe(startWith(''))
    ]).pipe(
      map(([users, user, searchString])=>
        users.filter((u: any) => 
          u.displayName?.toLowerCase().includes((searchString || '').toLowerCase()) &&
          u.uid !== user?.uid
  ))
); 
  }

  createChat(otherUser: ProfileUser){

  }
}
