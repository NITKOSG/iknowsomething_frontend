import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PapersRoutingModule } from './papers-routing.module';
import { PaperViewComponent } from './paper-view/paper-view.component';
import { UploadComponent } from './upload/upload.component';
import { CourseComponent } from './course/course.component';
import { BranchComponent } from './branch/branch.component';
import { SemesterComponent } from './semester/semester.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PaperViewComponent, UploadComponent, CourseComponent, BranchComponent, SemesterComponent],
  imports: [
    CommonModule,
    PapersRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class PapersModule { }
