import { Component } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { EventService } from '../../services/events';
import { Event } from '../../models/event';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-eventpage',
  imports: [],
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
        console.log(params.get('id'));
        if (params.getAll("id")!=null){
          this.id = params.get('id');
        }
        
        return this.eventService.getEvent(this.id);
      })
    ).subscribe({
      next: (data: Event) => {
        this.event = data;
        console.log(this.event);
      },
      error: (error) => {
        console.log(error);
      },
    });
    
  };    
}
