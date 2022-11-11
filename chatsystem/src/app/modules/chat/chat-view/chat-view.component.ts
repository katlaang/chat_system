import { Component, OnInit } from '@angular/core';
import { ChatModel } from 'src/app/models/chat.model';
import { ChatService } from 'src/app/services/chat/chat.service';
import {ConversationComponent } from '../conversation/conversation.component'

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit {
  chats: ChatModel[] = [];
  displayedColumns: string[] = ['screenName', 'message', 'timestamp'];

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chats = this.chatService.getChats();
    console.log(this.chats)
  }

}
