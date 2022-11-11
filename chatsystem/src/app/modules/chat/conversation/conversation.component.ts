import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  message: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  send(){

  }
}
