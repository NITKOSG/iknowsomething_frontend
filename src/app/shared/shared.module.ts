import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MediumEditorComponent } from './medium-editor/medium-editor.component';
import { ReactComponent } from './react/react.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MediumEditorComponent,
    ReactComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    MediumEditorComponent,
    ReactComponent,
    CommentComponent
  ]
})
export class SharedModule { }
