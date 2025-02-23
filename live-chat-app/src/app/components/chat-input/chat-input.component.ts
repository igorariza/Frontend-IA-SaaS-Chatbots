import { Component, EventEmitter, Output } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {
  message: string = '';

  constructor(private messageService: MessageService) {}

  sendMessage() {
    if (this.message.trim()) {
      this.messageService.sendMessage(this.message);
      this.message = '';
    }
  }
}