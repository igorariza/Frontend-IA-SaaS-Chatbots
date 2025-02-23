import {ChatWindowComponent} from './components/chat-window/chat-window.component';
import {MessageComponent} from './components/message/message.component';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
    {path: '', component: ChatWindowComponent},
    {path: 'message', component: MessageComponent},
    {path: 'chat-input', component: ChatInputComponent}
];


