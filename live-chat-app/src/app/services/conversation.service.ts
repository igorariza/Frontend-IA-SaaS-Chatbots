import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  private apiUrl = 'http://127.0.0.1:8000/process_conversation/';

  constructor(private http: HttpClient) {}

  processConversation(conversation: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, conversation);
  }
}