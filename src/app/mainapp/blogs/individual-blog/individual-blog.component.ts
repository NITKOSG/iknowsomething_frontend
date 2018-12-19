import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsServiceClass } from '../blogs.service';
import { response } from 'src/app/shared/response.model';

declare var M;

@Component({
  selector: 'app-individual-blog',
  templateUrl: './individual-blog.component.html',
  styleUrls: ['./individual-blog.component.scss']
})
export class IndividualBlogComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogsServiceClass
  ) { }

  blogId: string;
  blog: any;
  comments = [];

  ngOnInit() {
    this.blogId = this.route.snapshot.paramMap.get('id'); // getting id from url params
    this.blogService.getBlog(this.blogId).subscribe((res: response) => {
      this.blog = res.data.blog;
      this.comments = this.blog.comments;
    });
  }

  addReaction(action, data = null) {
    this.blogService.addReaction(this.blogId, action, data)
      .subscribe(
        (res: response) => {
          if (res.success) {
            M.toast({ html: res.message });
            this.comments = res.data.result.comments;
          } else {
            M.toast({ html: res.message });
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
