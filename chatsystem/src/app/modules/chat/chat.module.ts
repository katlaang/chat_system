import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RegisterChatterComponent } from './register-chatter/register-chatter.component';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ConversationComponent } from './conversation/conversation.component';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'




@NgModule({
  declarations: [
    RegisterChatterComponent,
    ChatViewComponent,
    ConversationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatTableModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class ChatModule { }
