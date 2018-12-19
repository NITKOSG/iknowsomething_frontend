import { Component, OnInit } from '@angular/core';
import { BlogsServiceClass } from '../blogs.service';
import { response } from 'src/app/shared/response.model';

declare var M;

@Component({
  selector: 'app-writeblog',
  templateUrl: './writeblog.component.html',
  styleUrls: ['./writeblog.component.scss']
})
export class WriteblogComponent implements OnInit {
  title = '';
  content = '';

  constructor(private blogService: BlogsServiceClass) { }

  ngOnInit() {
  }

  titleChange(value: string) {
    this.title = value;
  }

  contentChange(value: string) {
    this.content = value;
  }

  onSubmit() {
    if (this.title === '' && this.content === '') {
      M.toast({ html: 'Please Enter Something Valid' });
    } else {
      this.blogService.submitBlog({
        title: this.title,
        content: this.content
      }).subscribe((res: response) => {
        M.toast({ html: res.message });
      }, (err) => {
        M.toast({ html: err.message });
      });
    }
  }
}
