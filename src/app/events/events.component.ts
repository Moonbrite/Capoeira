import { Component } from '@angular/core';
import { EventsfiltersComponent } from '../components/eventsfilters/eventsfilters.component';

@Component({
  selector: 'app-events',
  imports: [EventsfiltersComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {

}
