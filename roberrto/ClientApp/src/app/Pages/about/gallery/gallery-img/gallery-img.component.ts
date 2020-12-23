import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-img',
  templateUrl: './gallery-img.component.html',
  styleUrls: ['./gallery-img.component.css']
})
export class GalleryImgComponent implements OnInit {
  @Input() imageUrl?:string;
  imgServerPath:string = "/images/gallery/";



  constructor() { }

  ngOnInit(): void {
    console.log(this.imageUrl);
  }

}
