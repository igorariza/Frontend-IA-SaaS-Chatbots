import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { MessageComponent } from './components/message/message.component';
import { WebSocketService } from './services/websocket.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatWindowComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }