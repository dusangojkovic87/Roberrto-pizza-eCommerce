import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-gallery-img-form',
  templateUrl: './gallery-img-form.component.html',
  styleUrls: ['./gallery-img-form.component.css']
})
export class GalleryImgFormComponent implements OnInit {
  addImageForm:any;
  showSuccessMessage:boolean = false;

  constructor(private fb:FormBuilder,private admin:AdminService) { }

  ngOnInit(): void {
    this.addImageForm = this.fb.group({
      Img:[null,Validators.required]

    });
  }

  addGalleryImg(){
    let formData = new FormData();

    formData.append("Img",this.addImageForm.get('Img').value);
    this.admin.addGalleryImg(formData).subscribe(data =>{
      this.showMessage();
      this.addImageForm.reset();

    },err =>{
      console.log(err);

    })

  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.addImageForm.get('Img').setValue(file);
    }
  }

  showMessage(){
    this.showSuccessMessage = true;
    setTimeout(() => {
       this.showSuccessMessage = false;
    }, 3000);

  }

}
