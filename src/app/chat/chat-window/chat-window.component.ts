import { Component, Input } from '@angular/core';
import { Message } from '../chat.module';

@Component({
  selector: 'app-chat-window',
  template: `
  <div class="chat-window">
    <div class="chat-header">
      <h3>{{ currentChat?.name || 'Select a chat' }}</h3>
    </div>
    <div class="messages">
      <div *ngFor="let message of messages" class="message">
        {{ message.text }}
      </div>
    </div>
  </div>
`,
styles: [`
  .chat-window {
    flex: 1;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #ccc;
  }
  .chat-header {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  .messages {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
  }
  .message {
    margin-bottom: 10px;
    padding: 8px;
    background-color: #f0f0f0;
    border-radius: 4px;
  }
`]
})
export class ChatWindowComponent {
  @Input() currentChat: {id: number, name: string} | null = null;
  // @Input() messages: {text: string}[] = [];
    @Input() messages: Message[] = [];
  @Input() currentChatName: string = '';
}
