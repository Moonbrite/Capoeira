import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveDiscussionComponent } from './active-discussion.component';

describe('ActiveDiscussionComponent', () => {
  let component: ActiveDiscussionComponent;
  let fixture: ComponentFixture<ActiveDiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveDiscussionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
