import { Component, OnInit } from '@angular/core';
import { Paper } from '../paper.model';
import { NgForm } from '@angular/forms';

declare const M;
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  paper: Paper = { imagePath: '', sem: null, course: '', branch: '', name: '', code: null };
  imageSrc: string;
  constructor() { }

  ngOnInit() {
  }

  readURL(event: Event): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.paper.imagePath = reader.result;

      reader.readAsDataURL(file);
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      M.toast({ html: 'Enter valid data in the form' });
    } else {
      console.log(this.paper);
    }

  }
