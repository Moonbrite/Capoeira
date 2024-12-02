import { Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';    
import {ActiveDiscussionsComponent} from './active-discussions/active-discussions.component';
import {ActiveDiscussionComponent} from './active-discussions/active-discussion/active-discussion.component';

export const routes: Routes = [
  {path: 'active-discussions', component: ActiveDiscussionsComponent,
  children: [
    { path:'active-discussions/:id' , component: ActiveDiscussionComponent },]
  },
  { path: 'events', component: EventsComponent },
];
