import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { MessageComponent } from './components/message/message.component';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { WebSocketService } from './services/websocket.service';
import { MessageService } from './services/message.service';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    ChatWindowComponent,
    MessageComponent,
    ChatInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      routes,
      {enableTracing: true} // <-- debugging purposes only
    )

  ],
  providers: [WebSocketService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }