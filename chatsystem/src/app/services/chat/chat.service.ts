import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  constructor() { }

  getChats(): import("../../models/chat.model").ChatModel[] {
    return [
      { 
        screenName: "Bon", 
        message: "Nice try",
        chatRoom: "Team 4",
        timestamp: new Date()
      },
      { 
        screenName: "Fisseha", 
        message: "Hi there",
        chatRoom: "Team 4",
        timestamp: new Date()
      },
      { 
        screenName: "Sachin", 
        message: "Bla bla",
        chatRoom: "Team 4",
        timestamp: new Date()
      },
      { 
        screenName: "Sally", 
        message: "Hello there",
        chatRoom: "Team 4",
        timestamp: new Date()
      },
      { 
        screenName: "Eunice", 
        message: "Have a nice day",
        chatRoom: "Team 4",
        timestamp: new Date()
      },
      { 
        screenName: "Brad", 
        message: "Hello from Room 4",
        chatRoom: "Team 4",
        timestamp: new Date()
      },
      { 
        screenName: "Ahmed", 
        message: "How are you ",
        chatRoom: "Team 4",
        timestamp: new Date()
      },
      { 
        screenName: "Amrit", 
        message: "Nice Day",
        chatRoom: "Team 4",
        timestamp: new Date()
      },
      { 
        screenName: "Abebe", 
        message: "Looking for a place",
        chatRoom: "Team 4",
        timestamp: new Date()
      },
      { 
        screenName: "Susan", 
        message: "I am here",
        chatRoom: "Team 4",
        timestamp: new Date()
      },
      { 
        screenName: "Jack", 
        message: "What a wonderful day!",
        chatRoom: "Team 4",
        timestamp: new Date()
      }
    ]
  }
}
