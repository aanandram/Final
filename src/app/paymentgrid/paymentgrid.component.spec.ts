import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentgridComponent } from './paymentgrid.component';

describe('PaymentgridComponent', () => {
  let component: PaymentgridComponent;
  let fixture: ComponentFixture<PaymentgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
