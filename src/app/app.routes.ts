import { Routes } from '@angular/router';
import {ActiveDicussionsComponent} from './active-discussions/active-dicussions.component';
import {ActiveDicussionComponent} from './active-discussions/active-dicussion/active-dicussion.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'active-discussions', component: ActiveDicussionsComponent,
  children: [
    { path:'active-discussions/:id' , component: ActiveDicussionComponent },]
  }
];
