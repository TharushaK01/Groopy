import { Component } from '@angular/core';
import { Chat, Message } from '../chat.module';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrl: './chat-container.component.scss'
})
export class ChatContainerComponent {
  chats: Chat[] = [
    { id: 1, name: 'Sasika' },
    { id: 2, name: 'Hashan' },
    { id: 3, name: 'Bishan' },
    { id: 4, name: 'Tharusha Kavinda' }
  ];

  messages: { [key: number]: Message[] } = {
    1: [],
    2: [],
    3: [],
    4: [
      { text: 'Hello' },
      { text: 'Hello' }
    ]
  };

  activeChatId: number | null = 4;

  onSelectChat(chatId: number) {
    this.activeChatId = chatId;
  }

  getCurrentChat(): Chat | null {
    return this.chats.find(chat => chat.id === this.activeChatId) || null;
  }

  getMessages(): Message[] {
    return this.activeChatId ? this.messages[this.activeChatId] : [];
  }

  onMessageSent(message: string) {
    if (this.activeChatId) {
      this.messages[this.activeChatId].push({ 
        text: message,
        timestamp: new Date() 
      });
    }
  }
}
