import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-add-team-member-form',
  templateUrl: './add-team-member-form.component.html',
  styleUrls: ['./add-team-member-form.component.css'],
})
export class AddTeamMemberFormComponent implements OnInit {
  teamMemberForm: any;
  showSuccessMessage: boolean = false;

  constructor(private admin: AdminService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.teamMemberForm = this.fb.group({
      FullName: ['', Validators.required],
      Job: ['', Validators.required],
      Img: [null, Validators.required],
      Email: ['', Validators.required],
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.teamMemberForm.get('Img').setValue(file);
    }
  }

  addTeamMember() {
    let formData = new FormData();
    formData.append('FullName', this.teamMemberForm.get('FullName').value);
    formData.append('Job', this.teamMemberForm.get('Job').value);
    formData.append('Img', this.teamMemberForm.get('Img').value);
    formData.append('Email', this.teamMemberForm.get('Email').value);

    this.admin.addTeamMember(formData).subscribe(
      (data) => {
        this.showMessage();
        this.teamMemberForm.reset();
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
    },3000);
  }
}
