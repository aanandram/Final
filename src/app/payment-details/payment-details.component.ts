import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Payment } from '../payment';

@Component({
  selector: 'app-payment-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  payments : Payment[];
  constructor(public service : PaymentService, private changeDetector : ChangeDetectorRef) { }

  ngOnInit() {
  
  }

  Submit()
  {
    this.service.AddPayment();  
  }

}
