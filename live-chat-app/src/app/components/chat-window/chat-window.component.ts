import { Component } from '@angular/core';
import { WebSocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})

export class ChatWindowComponent {
  messages: { sender: string; content: string }[] = [];
  newMessage: string = '';

  constructor(private websocketService: WebSocketService) {
    this.websocketService.sendMessage((message: { sender: string; content: string }) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      const message = { sender: 'User', content: this.newMessage };
      this.websocketService.sendMessage(message);
      this.messages.push(message);
      this.newMessage = '';
    }
  }

  joinChatRoom(room: string) {
    this.websocketService.joinRoom(room);
  }
}