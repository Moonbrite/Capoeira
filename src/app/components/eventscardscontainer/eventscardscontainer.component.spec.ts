import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventscardscontainerComponent } from './eventscardscontainer.component';

describe('EventscardscontainerComponent', () => {
  let component: EventscardscontainerComponent;
  let fixture: ComponentFixture<EventscardscontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventscardscontainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventscardscontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
