import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventscardsComponent } from './eventscards.component';

describe('EventscardsComponent', () => {
  let component: EventscardsComponent;
  let fixture: ComponentFixture<EventscardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventscardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
