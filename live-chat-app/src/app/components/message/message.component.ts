import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() content!: string;
  @Input() sender!: string;

  constructor() {}

  ngOnInit(): void {
    console.log('MessageComponent initialized with sender:', this.sender, 'and content:', this.content);
  }
}