import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ChatContainerComponent,
    ChatListComponent,
    ChatWindowComponent,
    MessageInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ChatContainerComponent]
})
export class ChatModule { }
export interface Chat {
  id: number;
  name: string;
}

export interface Message {
  text: string;
  timestamp?: Date;
  sender?: string;
}