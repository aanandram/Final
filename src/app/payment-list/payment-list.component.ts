import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  payments : Payment[];
  constructor(private service : PaymentService, private changeDetector : ChangeDetectorRef) { }

  ngOnInit() {

    this.service.LoadAllPayments();

    this.service.dataStore$.subscribe(res => this.payments = res);

    this.changeDetector.markForCheck();

  }

  OnSelected(pay : Payment)
  {
    console.log("on list");

    this.service.payment = Object.assign({}, pay);
    console.log(pay.CardOwnerName);
    //this.service.populateEditForm(pay);
  }

}
