import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsfiltersComponent } from './eventsfilters.component';

describe('EventsfiltersComponent', () => {
  let component: EventsfiltersComponent;
  let fixture: ComponentFixture<EventsfiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsfiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsfiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
