import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatWindowComponent } from './chat-window.component';
import { WebSocketService } from '../../services/websocket.service';
import { of } from 'rxjs';

describe('ChatWindowComponent', () => {
  let component: ChatWindowComponent;
  let fixture: ComponentFixture<ChatWindowComponent>;
  let mockWebSocketService: jasmine.SpyObj<WebSocketService>;

  beforeEach(async () => {
    mockWebSocketService = jasmine.createSpyObj('WebSocketService', ['connect', 'sendMessage', 'getMessages']);
    mockWebSocketService.getMessages.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [ ChatWindowComponent ],
      providers: [
        { provide: WebSocketService, useValue: mockWebSocketService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call connect on WebSocketService on init', () => {
    component.ngOnInit();
    expect(mockWebSocketService.connect).toHaveBeenCalled();
  });

  it('should send message when sendMessage is called', () => {
    const message = 'Hello World';
    component.message = message;
    component.sendMessage();
    expect(mockWebSocketService.sendMessage).toHaveBeenCalledWith(message);
    expect(component.message).toBe('');
  });

  it('should receive messages from WebSocketService', () => {
    const messages = [{ content: 'Hello', sender: 'User1' }];
    mockWebSocketService.getMessages.and.returnValue(of(messages));
    component.ngOnInit();
    expect(component.messages).toEqual(messages);
  });
});