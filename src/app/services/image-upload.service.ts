import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor( private storage: Storage) { }

  uploadImage(image: File, path: string): Observable<string> {
    const storageRef = ref(this.storage, path);
    const uploadTask = from(uploadBytes(storageRef, image));
    
    return uploadTask.pipe(
      switchMap((result) => getDownloadURL(result.ref)) 
    );
  } 
}
