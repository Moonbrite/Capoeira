import { Component } from '@angular/core';
import { EventsfiltersComponent } from '../components/eventsfilters/eventsfilters.component';
import { EventService } from '../services/events';
import { OnInit } from '@angular/core';
import { Event } from "../models/event";
import { EventscardscontainerComponent } from '../components/eventscardscontainer/eventscardscontainer.component';


@Component({
  selector: 'app-events',
  imports: [EventsfiltersComponent, EventscardscontainerComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
  constructor(
    private eventService: EventService,
  ){};

  events?: Event[];
  event?: Event;

  ngOnInit(){
    // this.eventService.getAll().subscribe({
    //   next: (data: Event[]) => {
    //     this.events = data;
    //     console.log(this.events);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    // });
    

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
