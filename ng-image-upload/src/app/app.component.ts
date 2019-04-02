import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpEventType } from "@angular/common/http";
import { moveItemInArray, transferArrayItem, CdkDragDrop } from "@angular/cdk/drag-drop"
import { Observable } from 'rxjs';

class ImageFile {
  file: File;
  uploadProgress: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  images: ImageFile[] = [];
  imageUrls: string[] = [];
  favourites: string[] = [];
  message: string = null;

  constructor(private http : HttpClient) { }
  
  selectFiles = (event) => {
    this.images = [];
    let files : FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      if (files.item(i).name.match(/\.(jpg|jpeg|png|gif)$/)) {
        this.images.push({file: files.item(i), uploadProgress: "0"});
      }
    }
    this.message = `${this.images.length} valid image(s) selected`;
  }

  uploadImages(){
    this.images.map((image, index) => {
      const formData = new FormData();
      formData.append("image", image.file, image.file.name);
      return this.http.post('http://localhost:5000/upload', formData, {
        reportProgress: true,
        observe: "events"
      })
        .subscribe(event => {
          if (event.type === HttpEventType.UploadProgress ) {
            image.uploadProgress = `${(event.loaded / event.total * 100)}%`;
          } 
          if (event.type === HttpEventType.Response) {
            this.imageUrls.push(event.body.imageUrl);
          }
        });
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data,
      event.previousIndex, event.currentIndex)
    } else {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
