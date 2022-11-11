import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterChatterComponent } from './register-chatter/register-chatter.component';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ConversationComponent } from './conversation/conversation.component';



@NgModule({
  declarations: [
    RegisterChatterComponent,
    ChatViewComponent,
    ConversationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChatModule { }
