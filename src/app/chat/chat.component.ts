import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { combineLatest, map, Observable, pipe, startWith } from 'rxjs';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit{

  user$ =this.usersService.currentUserProfile$;
  users$!: Observable<any>; // 2/6 video 6.00s
  // users$ = this.usersService.allUsers$;
  // searchConrtol = new FormControl('')
  searchControl = new FormControl('');

  constructor(private usersService: UsersService){}

  ngOnInit(): void {
    this.users$ = combineLatest([
      this.usersService.allUsers$, 
      this.user$,
      this.searchControl.valueChanges.pipe(startWith(''))
    ]).pipe(
      map(([users, user, searchString])=>users.filter( (u: any)=>u.displayName?.toLoweCase().includes(searchString.toLowerCase())
    && u.uid !== user?.uid))
    ); 
  }

}
