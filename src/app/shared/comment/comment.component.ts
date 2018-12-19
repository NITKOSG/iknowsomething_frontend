import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var M;

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comments: [];
  @Output() addComment = new EventEmitter();
  private comment = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.comment.trim() === '') {
      M.toast({ html: 'Please enter some text to comment' });
    } else {
      this.addComment.emit(this.comment);
    }
  }

  commentChanged(comment) {
    this.comment = comment.target.value;
    comment.target.value = '';
  }

}
