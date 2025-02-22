import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = new WebSocketSubject('ws://localhost:3000');
  }

  public connect(): void {
    console.log('Connecting to WebSocket server...');
    this.socket$.subscribe(
      message => console.log('Received message:', message),
      err => console.error('Error:', err),
      () => console.log('Connection closed')
    );
  }

  public sendMessage(message: any): void {
    console.log('Sending message:', message);
    this.socket$.next(message);
  }

  public joinRoom(room: string): void {
    this.socket$.next({ action: 'join', room });
  }
}