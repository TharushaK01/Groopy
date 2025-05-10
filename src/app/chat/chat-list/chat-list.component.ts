import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  template: `
  <div class="chat-list">
    <h2>Chats</h2>
    <ul>
      <li *ngFor="let chat of chats" 
          [class.active]="chat.id === activeChatId"
          (click)="selectChat.emit(chat.id)">
        {{ chat.name }}
      </li>
    </ul>
  </div>
`,
styles: [`
  .chat-list {
    width: 200px;
    border-right: 1px solid #ccc;
    padding: 10px;
    height: 100%;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    padding: 8px;
    cursor: pointer;
  }
  li.active {
    background-color: #f0f0f0;
    font-weight: bold;
  }
  li:hover {
    background-color: #f5f5f5;
  }
`]
})
export class ChatListComponent {
  @Input() chats: {id: number, name: string}[] = [];
  @Input() activeChatId: number | null = null;
  @Output() selectChat = new EventEmitter<number>();
}
