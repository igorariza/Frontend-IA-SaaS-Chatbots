import { Component } from '@angular/core';
import { WebSocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Live Chat Application';
  messages: string[] = [];
  newMessage: string = '';

  constructor(private websocketService: WebSocketService) {
    this.websocketService.connect();
    this.websocketService.onMessage((message: string) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.websocketService.sendMessage(this.newMessage);
      this.newMessage = '';
    }
  }
}