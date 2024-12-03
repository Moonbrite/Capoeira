import { Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';    
import {ActiveDiscussionsComponent} from './active-discussions/active-discussions.component';
import {ActiveDiscussionComponent} from './active-discussions/active-discussion/active-discussion.component';
import { HomeComponent } from './home/home.component';
import { DocumentsComponent } from './sub-pages/documents/documents.component';
import { LegalsComponent } from './sub-pages/legals/legals.component';
import { PartnersComponent } from './sub-pages/partners/partners.component';
import { MembersComponent } from './members/members.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'active-discussions', component: ActiveDiscussionsComponent,
        children: [
            { path:'active-discussions/:id' , component: ActiveDiscussionComponent },]
    },
    { path: 'events', component: EventsComponent },
    { path: 'members', component: MembersComponent },
    { path: 'documents', component: DocumentsComponent },
    { path: 'legals', component: LegalsComponent },
    { path: 'partners', component: PartnersComponent },
];
