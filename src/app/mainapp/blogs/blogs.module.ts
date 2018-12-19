import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { IndividualBlogComponent } from './individual-blog/individual-blog.component';
import { BlogsComponent } from './blogs.component';
import { WriteblogComponent } from './writeblog/writeblog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogsServiceClass } from './blogs.service';


@NgModule({
  declarations: [
    IndividualBlogComponent,
    BlogsComponent,
    WriteblogComponent,
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    SharedModule
  ],
  providers: [BlogsServiceClass]
})
export class BlogsModule { }
