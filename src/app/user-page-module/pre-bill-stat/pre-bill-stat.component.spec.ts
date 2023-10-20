import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreBillStatComponent } from './pre-bill-stat.component';

describe('PreBillStatComponent', () => {
  let component: PreBillStatComponent;
  let fixture: ComponentFixture<PreBillStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreBillStatComponent]
    });
    fixture = TestBed.createComponent(PreBillStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
