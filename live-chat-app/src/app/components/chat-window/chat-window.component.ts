import { WebSocketService } from '../../services/websocket.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})

export class ChatWindowComponent implements OnInit {
  messages: { sender: string; content: string }[] = [];
  newMessage: string = '';

  constructor(private websocketService: WebSocketService, private messageService: MessageService) { }
  ngOnInit(): void {
    this.messageService.message$.subscribe(message => {
      this.messages.push({ sender: 'You', content: message });
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