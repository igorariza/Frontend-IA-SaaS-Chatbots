export class MessageComponent {
  content: string;
  sender: string;

  constructor(content: string, sender: string) {
    this.content = content;
    this.sender = sender;
  }
}