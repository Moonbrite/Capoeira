import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveDicussionComponent } from './active-dicussion.component';

describe('ActiveDicussionComponent', () => {
  let component: ActiveDicussionComponent;
  let fixture: ComponentFixture<ActiveDicussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveDicussionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveDicussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
