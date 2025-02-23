import {ChatWindowComponent} from './components/chat-window/chat-window.component';
import {MessageComponent} from './components/message/message.component';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
    {path: '', component: ChatWindowComponent},
    {path: 'message', component: MessageComponent}
];


