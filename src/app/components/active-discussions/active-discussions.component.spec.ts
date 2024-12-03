import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveDiscussionsComponent } from './active-discussions.component';

describe('ActiveDiscussionsComponent', () => {
  let component: ActiveDiscussionsComponent;
  let fixture: ComponentFixture<ActiveDiscussionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveDiscussionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveDiscussionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
