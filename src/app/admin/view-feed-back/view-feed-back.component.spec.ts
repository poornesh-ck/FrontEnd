import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFeedBackComponent } from './view-feed-back.component';

describe('ViewFeedBackComponent', () => {
  let component: ViewFeedBackComponent;
  let fixture: ComponentFixture<ViewFeedBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFeedBackComponent]
    });
    fixture = TestBed.createComponent(ViewFeedBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
