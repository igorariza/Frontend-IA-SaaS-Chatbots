import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'live-chat-app';

  handleMessage(message: string) {
    console.log('Message received:', message);
    //Update component chat window
    

  }
}