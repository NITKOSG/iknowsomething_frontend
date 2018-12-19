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
  currentTime = new Date();

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

  timeDifference(current, previous) {
    previous = new Date(previous);
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    const elapsed = current - previous;

    if (elapsed < msPerMinute) {
         return Math.round(elapsed / 1000) + ' seconds ago';
    } else if (elapsed < msPerHour) {
         return Math.round(elapsed / msPerMinute) + ' minutes ago';
    } else if (elapsed < msPerDay ) {
         return Math.round(elapsed / msPerHour ) + ' hours ago';
    } else if (elapsed < msPerMonth) {
        return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
    } else if (elapsed < msPerYear) {
        return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
    } else {
        return 'approximately ' + Math.round(elapsed / msPerYear ) + ' years ago';
    }
}

}
