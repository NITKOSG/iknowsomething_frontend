import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaperViewComponent } from './paper-view/paper-view.component';
import { UploadComponent } from './upload/upload.component';
import { CourseComponent } from './course/course.component';
import { BranchComponent } from './branch/branch.component';
import { SemesterComponent } from './semester/semester.component';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';

const routes: Routes = [
  { path: 'upload', canActivate: [AuthGuardService], component: UploadComponent },
  { path: ':course', canActivate: [AuthGuardService], component: CourseComponent },
  { path: ':course/:branch', canActivate: [AuthGuardService], component: BranchComponent },
  { path: ':course/:branch/:sem', canActivate: [AuthGuardService], component: SemesterComponent },
  { path: ':course/:branch/:sem/:code', canActivate: [AuthGuardService], component: PaperViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PapersRoutingModule { }
