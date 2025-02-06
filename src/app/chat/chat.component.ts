import { Component,  OnInit} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { User } from 'stream-chat';
import { 
  ChatClientService,
  ChannelService,
  StreamI18nService,
  StreamAutocompleteTextareaModule, 
  StreamChatModule } from 'stream-chat-angular';
import { TranslateService } from '@ngx-translate/core';

constructor(private streamI18nService: StreamI18nService,
  private translateService: TranslateService
) {
  this.translateService.getTranslation('en').subscribe(() => {
  this.streamI18nService.setTranslation('en');
  this.translateService.use("en");
});
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [TranslateModule, StreamAutocompleteTextareaModule, StreamChatModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {
  constructor(
    private chatService: ChatClientService,
    private channelService: ChannelService,
    private streamI18nService: StreamI18nService,
  ) {
    const apiKey = 'dz5f4d5kzrue';
    const userId = 'gentle-sky-2';
    const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZ2VudGxlLXNreS0yIiwiZXhwIjoxNzM4ODI1NDcxfQ.Xjer54n6hIV2EbunRDjI06l19onI8TNObp4TYMxcO1w';
    const userName = 'gentle';

    const user: User = {
      id: userId,
      name: userName,
      image: `https://getstream.io/random_png/?name=${userName}`,
    };

    this.chatService.init(apiKey, user, userToken);
    this.streamI18nService.setTranslation();
  }

  async ngOnInit() {
    const channel = this.chatService.chatClient.channel('messaging', 'talking-about-angular', {
      // add as many custom fields as you'd like
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
      name: 'Talking about Angular',
    });
    await channel.create();
    this.channelService.init({
      type: 'messaging',
      id: { $eq: 'talking-about-angular' },
    });
  }

}
