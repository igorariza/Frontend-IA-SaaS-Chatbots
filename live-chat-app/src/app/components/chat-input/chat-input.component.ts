import { Component, EventEmitter, Output } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { ConversationService } from '../../services/conversation.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {
  message: string = '';
  conversationId: string = '';

  constructor(private messageService: MessageService, private conversationService: ConversationService) {}

  sendMessage() {
    if (this.message.trim()) {
      const newMessage = {
        role: 'user',
        text: this.message,
        timestamp: new Date().toISOString()
      };

      const conversation = {
        conversation_id: this.conversationId,
        messages: [newMessage]
      };

      this.conversationService.processConversation(conversation).subscribe(response => {
        this.messageService.sendMessage(this.message);
        this.messageService.sendMessage(response.summary.summary);
        this.message = '';
      });
    }
  }
}