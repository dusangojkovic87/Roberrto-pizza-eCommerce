import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GalleryImg } from '../Models/GalleryImg';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http:HttpClient) { }

  getImages(){
    return this.http.get<GalleryImg[]>("http://localhost:5000/imagegallery/images");
  }
}
