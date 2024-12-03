import {Component, OnInit} from '@angular/core';
import {EventService} from '../services/events';
import { Event } from '../models/event';
import {DatePipe} from '@angular/common';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [
    DatePipe,
    RouterLink
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private eventService: EventService) {
  }

  event?:Event;
  nbOfEvents?:number;
  idEvent?:number;

  ngOnInit(): void {

    this.eventService.getAll().subscribe({
      next: (data: Event[]) => {
        this.nbOfEvents = data.length;
        this.idEvent =  Math.floor(Math.random() * (this.nbOfEvents ) + 1);
        this.eventService.getEvent(this.idEvent).subscribe({
          next: event => {this.event = event},
          error: event => {console.log(event)},
        })

        },
      error: (error) => {console.log(error);}
    })


  }



}
