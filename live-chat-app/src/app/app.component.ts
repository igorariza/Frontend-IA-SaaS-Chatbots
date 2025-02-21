import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'live-chat-app';

  constructor(private websocketService: WebSocketService) {}

  ngOnInit(): void {
    this.websocketService.connect();
  }
}