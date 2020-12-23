import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GalleryImg } from 'src/app/Models/GalleryImg';

@Component({
  selector: 'app-full-size-img',
  templateUrl: './full-size-img.component.html',
  styleUrls: ['./full-size-img.component.css']
})
export class FullSizeImgComponent implements OnInit {
  @Input() clickedImg?:GalleryImg;
  @Output() closeFullImg:EventEmitter<any> = new EventEmitter();
  serverImgPath:string = "/images/gallery/";

  constructor() { }

  ngOnInit(): void {
  }

  closeImg(){
    this.closeFullImg.emit(false);

  }

}
