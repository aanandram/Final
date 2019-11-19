import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Payment } from '../payment';

@Component({
  selector: 'app-paymentgrid',
  templateUrl: './paymentgrid.component.html',
  styleUrls: ['./paymentgrid.component.css']
})
export class PaymentgridComponent implements OnInit {

  constructor() { }

  @Input()
  payments : Payment[]
  @Output() selected = new EventEmitter<Payment>();

  ngOnInit() {
  }

  populate(pay : Payment)
  {
    console.log("grid");
    this.selected.emit(pay);
  }

}
