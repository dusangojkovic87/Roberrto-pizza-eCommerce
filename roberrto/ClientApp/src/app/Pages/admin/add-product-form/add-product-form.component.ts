import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css'],
})
export class AddProductFormComponent implements OnInit {
  addProductForm: any;
  showSuccessMessage: boolean = false;

  constructor(private fb: FormBuilder, private admin: AdminService) {}

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      Category: ['', Validators.required],
      TopOffer: ['false', Validators.required],
      Price: ['', Validators.required],
      Img: [null, Validators.required],
    });
  }

  addNewProduct() {
    let formData = new FormData();
    formData.append('Name', this.addProductForm.get('Name').value);
    formData.append(
      'Description',
      this.addProductForm.get('Description').value
    );
    formData.append('Category', this.addProductForm.get('Category').value);
    formData.append('TopOffer', this.addProductForm.get('TopOffer').value);
    formData.append('Price', this.addProductForm.get('Price').value);

    formData.append('Img', this.addProductForm.get('Img').value);
    this.admin.addNewProduct(formData).subscribe(
      (data) => {
        this.addProductForm.reset();
        this.showMessage();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.addProductForm.get('Img').setValue(file);
    }
  }

  showMessage() {
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 3000);
  }
}
