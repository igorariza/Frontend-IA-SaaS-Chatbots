export class ChatWindowComponent {
  messages: { sender: string; content: string }[] = [];
  newMessage: string = '';

  constructor(private websocketService: WebSocketService) {
    this.websocketService.onMessage((message) => {
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