import { Component,OnInit } from '@angular/core';
import {  map } from 'rxjs/operators';
import { GalleryImg } from 'src/app/Models/GalleryImg';
import { GalleryService } from 'src/app/Services/gallery.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryImages:GalleryImg[] = [];
  galleryOpen:boolean = false;
  clickedImg?:GalleryImg;




  constructor(private http:GalleryService) { }

  ngOnInit(): void {
    this.http.getImages().pipe(
    map(data => data.slice(0,6))
    ).subscribe(data =>{
       this.galleryImages = data;
    })
  }

  openFullImg(index:number){
   this.galleryOpen = true;
   this.clickedImg = this.galleryImages[index];
  }

  closeFullImg(event:any){
    this.galleryOpen = event;

  }



}
