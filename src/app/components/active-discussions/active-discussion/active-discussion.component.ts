import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../models/card';
import {RouterLink} from '@angular/router';
import {MessagesService} from '../../../services/messages.service';

@Component({
  selector: 'app-active-discussion',
  imports: [RouterLink],
  templateUrl: './active-discussion.component.html',
  standalone: true,
  styleUrl: './active-discussion.component.scss'
})
export class ActiveDiscussionComponent{
  constructor(private cardService: MessagesService) {
  }


}
