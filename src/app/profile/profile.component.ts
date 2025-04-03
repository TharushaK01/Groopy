import { ImageUploadService } from './../services/image-upload.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '@angular/fire/auth';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})


export class ProfileComponent implements OnInit{

  user$: Observable<User | null>; 
  constructor( private authService: AuthenticationService,
    // private ImageUploadService: ImageUploadService // error here
  ){
    this.user$ = this.authService.currentUser$; 
  }

  ngOnInit(): void {}  

  uploadImage(event: any, user: User){

  }
}
 