import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatPanelComponent } from './chat-panel/chat-panel.component';
import { ChatContainerComponent } from './chat-container/chat-container.component';

@NgModule({
  declarations: [ChatBoxComponent, ChatPanelComponent, ChatContainerComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule { }
