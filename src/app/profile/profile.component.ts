import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '@angular/fire/auth';
import { ImageUploadService } from '../services/image-upload.service';
import { HotToastService } from '@ngneat/hot-toast';
import { concatMap } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})


export class ProfileComponent implements OnInit{

  user$: Observable<User | null>; 
  imageUploadService: any;
  constructor( private authService: AuthenticationService,
    private toast: HotToastService,
    // private ImageUploadService: ImageUploadService // error here
  ){
    this.user$ = this.authService.currentUser$; 
  }

  ngOnInit(): void {}  

  uploadImage(event: any, user: User){
    this.imageUploadService.uploadImage(event.target.files[0], { uid: user.uid } as User).pipe(
      this.toast.observe(
        {
          loading: 'Image is being uploaded..',
          success: 'Image uploaded!',
          error: 'There was an error in uploading'
        }
      ), concatMap((photoURL: unknown)=> {
        if (typeof photoURL === 'string' || photoURL === null || photoURL === undefined) {
          return this.authService.updateProfileData({ photoURL });
        }
        // Handle other cases or throw an error [Change it bonus 1=> 11.42]
        throw new Error('Invalid photoURL format');
      })
    ).subscribe();
  }
}
 