import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-message-input',
  template: `
    <div class="message-input">
      <input 
        type="text" 
        [(ngModel)]="messageText" 
        placeholder="Type Here..." 
        (keyup.enter)="sendMessage()"
      >
    </div>
  `,
  styles: [`
    .message-input {
      padding: 10px;
      border-top: 1px solid #ccc;
    }
    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  `]
})
export class MessageInputComponent {
  messageText = '';
  @Output() messageSent = new EventEmitter<string>();

  sendMessage() {
    if (this.messageText.trim()) {
      this.messageSent.emit(this.messageText);
      this.messageText = '';
    }
  }
}
