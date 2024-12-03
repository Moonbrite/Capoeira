import { Component, Pipe } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { EventService } from '../../services/events';
import { Event } from '../../models/event';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { CommonModule, DatePipe } from '@angular/common';


@Component({
  selector: 'app-eventpage',
  imports: [DatePipe],
  templateUrl: './eventpage.component.html',
  styleUrl: './eventpage.component.scss'
})
export class EventpageComponent implements OnInit {
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
  ){};

  id?: number;
  event?: Event;

  ngOnInit(){
    this.route.paramMap.pipe(
      switchMap((params) => {
        this.id = parseInt(<string>params.get('id'));
        return this.eventService.getEvent(this.id);
      })
    ).subscribe({
      next: (data: Event) => {
        this.event = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
    
  };    
}
