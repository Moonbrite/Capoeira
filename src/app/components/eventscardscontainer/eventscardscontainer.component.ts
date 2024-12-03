import { Component } from '@angular/core';
import { EventService } from '../../services/events';
import { OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-eventscardscontainer',
  imports: [NgForOf, RouterLink],
  templateUrl: './eventscardscontainer.component.html',
  standalone: true,
  styleUrl: './eventscardscontainer.component.scss'
})
export class EventscardscontainerComponent implements OnInit {
  constructor(
    private eventService: EventService,
  ){};

  events?: Event[];
  // event?: Event;


  ngOnInit(){
    this.eventService.getAll().subscribe({
      next: (data: Event[]) => {
        this.events = data;
        console.log(this.events);
      },
      error: (error) => {
        console.log(error);
      },
    });

    // this.eventService.getEvent(2).subscribe({
    //   next: (data: Event) => {
    //     this.event = data;
    //     console.log(this.event);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    // });
  }
}
