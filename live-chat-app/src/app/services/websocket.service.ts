export class WebSocketService {
  private socket: WebSocket;

  constructor(private url: string) {
    this.connect();
  }

  private connect(): void {
    this.socket = new WebSocket(this.url);

    this.socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    this.socket.onmessage = (event) => {
      this.handleMessage(event.data);
    };

    this.socket.onclose = () => {
      console.log('WebSocket connection closed, attempting to reconnect...');
      setTimeout(() => this.connect(), 1000);
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }

  public sendMessage(message: string): void {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
    } else {
      console.error('WebSocket is not open. Unable to send message.');
    }
  }

  private handleMessage(data: string): void {
    console.log('Received message:', data);
    // Handle incoming messages here
  }
}