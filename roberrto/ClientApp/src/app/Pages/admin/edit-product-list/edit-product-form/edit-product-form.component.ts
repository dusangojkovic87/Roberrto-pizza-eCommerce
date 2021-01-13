import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.css'],
})
export class EditProductFormComponent implements OnInit {
  id?: number;
  product?: Product;
  editProductForm?: any;
  ImgPreview: string = '';
  showSuccessMessage: boolean = false;

  constructor(
    private admin: AdminService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: Params) => {
      this.id = +params.get('id');
      console.log(this.id);

      if (this.id)
       this.loadProductData(this.id);
      this.admin.dataChanged$.subscribe(changed =>{
        if(changed){
          if(this.id)
          this.loadProductData(this.id);
        }
      })

    });

    this.editProductForm = this.fb.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      Category: ['', Validators.required],
      TopOffer: ['', Validators.required],
      Price: ['', Validators.required],
      Img: [null, Validators.required],
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.editProductForm.get('Img').setValue(file);
    }
  }

  loadProductData(id:number){
    this.admin.getProduct(id).subscribe((data) => {
      this.product = data;
      this.prepoluateDataForm(this.product);
    });

  }

  prepoluateDataForm(product: Product) {
    this.editProductForm.patchValue({
      Name: product?.name,
      Description: product?.description,
      Category: product?.category,
      TopOffer: product?.topOffer,
      Price: product?.price
    });

    this.ImgPreview = `/images/${product?.img}`;
  }

  editProduct() {
    let formData = new FormData();
    formData.append('Name', this.editProductForm.get('Name').value);
    formData.append(
      'Description',
      this.editProductForm.get('Description').value
    );
    formData.append('Category', this.editProductForm.get('Category').value);
    formData.append('TopOffer', this.editProductForm.get('TopOffer').value);
    formData.append('Price', this.editProductForm.get('Price').value);
    formData.append('Img', this.editProductForm.get('Img').value);
    if (this.id)
      this.admin.editProduct(formData, this.id).subscribe(
        (data) => {
          this.admin.dataChanged.next(true);
          this.showMessage();
        },
        (err) => {
          if (err instanceof HttpErrorResponse) {
            alert(err.error.title);
          }
          console.log(err);
        }
      );
  }

  showMessage() {
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 3000);
  }
}
