import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MessageService } from '../core/services/message/message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss',
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
