import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit{
  // user$ = this.UsersService.currentUserProfile$;
  // searchControl = new FormControl('');
  // constructor(private UsersService: UsersService) {
    
  // }

  ngOnInit(): void {}

}
