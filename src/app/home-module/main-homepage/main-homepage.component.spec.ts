import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomepageComponent } from './main-homepage.component';

describe('MainHomepageComponent', () => {
  let component: MainHomepageComponent;
  let fixture: ComponentFixture<MainHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainHomepageComponent]
    });
    fixture = TestBed.createComponent(MainHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
