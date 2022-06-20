import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewseventsComponent } from './newsevents.component';

describe('NewseventsComponent', () => {
  let component: NewseventsComponent;
  let fixture: ComponentFixture<NewseventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewseventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewseventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
