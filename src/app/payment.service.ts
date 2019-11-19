import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from './payment';
import { BehaviorSubject, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  payment = new Payment();
  

  constructor(private http : HttpClient) {

  }

  private subject = new BehaviorSubject([]);
  dataStore$ = this.subject.asObservable();
  private baseUri = 'http://localhost:59035/api'

  getAllPayments$ = this.http.get(this.baseUri +'/PaymentDetail')

  AddPayment()
  {
    console.log("in ser")
    ;console.log(this.payment.PMId)
    this.http.post(this.baseUri+'/PaymentDetail', this.payment).
    subscribe(res => {
      this.clearForm();
      this.LoadAllPayments();
    })
  } 

  private clearForm()
  {
    this.payment.PMId = 0
    this.payment.CVV = ""
    this.payment.CardNumber = ""    
    this.payment.CardOwnerName = ""

  }

  LoadAllPayments()
  {
    this.getAllPayments$.pipe(
      catchError(err =>         
        {
          console.log("Http error" , err);
          return of([]);
        }
      )
    )
    .subscribe(res => this.subject.next(res as Payment[]))
  }

  populateEditForm(pay : Payment)
  {
  

    // this.payment.PMId = pay.PMId;
    // this.payment.CVV = pay.CVV;
    // this.payment.CardNumber = pay.CardNumber;
    // this.payment.CardOwnerName = pay.CardOwnerName;
  }

}
