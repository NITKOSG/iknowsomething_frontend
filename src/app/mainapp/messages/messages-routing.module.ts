import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatContainerComponent } from './chat-container/chat-container.component';

const routes: Routes = [
  { path: ':id', component: ChatContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
