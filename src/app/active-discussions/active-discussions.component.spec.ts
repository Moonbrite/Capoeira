import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveDicussionsComponent } from './active-dicussions.component';

describe('ActiveDicussionsComponent', () => {
  let component: ActiveDicussionsComponent;
  let fixture: ComponentFixture<ActiveDicussionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveDicussionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveDicussionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
