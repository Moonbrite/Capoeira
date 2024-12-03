import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActiveDiscussionComponent} from './active-discussion/active-discussion.component';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Card} from '../../models/card';
import {MessagesService} from '../../services/messages.service';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';

@Component({
  selector: 'app-active-discussions',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './active-discussions.component.html',
  standalone: true,
  styleUrl: './active-discussions.component.scss'
})
export class ActiveDiscussionsComponent implements OnInit {
  cards: Card[] = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private messagesService: MessagesService) {
  }

  ngOnInit() {
    this.getCards();
  }

  getCards() {
    this.messagesService.getAll().subscribe(cards => this.cards = cards);
    console.log(this.cards);
  }
}
