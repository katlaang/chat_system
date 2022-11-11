import { inject, TestBed } from '@angular/core/testing';

import { ChatService } from './chat.service';

const chat = {
  message: 'Test Message',
  timestamp: new Date(),
  screenName: 'samiam',
  chatRoom: 'Test Chat Room'
};

describe('ChatService', () => {
  let service: ChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatService);
  });

  it('should be created', inject([ChatService], (service:ChatService)) () => {
    expect(service).toBeTruthy();
  });
});
