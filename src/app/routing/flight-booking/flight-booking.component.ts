import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit {
  loggedIn:any;
  calculateAmount = 0;
  isGetAmtClicked = false;
  passengers: number = 1;
  flightForm:any;

  ticketPrize: number = 5000;
  userList: any;
  isUserAdded: boolean = false;
  constructor(private  myhttp: HttpClient, private route:ActivatedRoute) {
    this.loggedIn = JSON.parse(sessionStorage.getItem('loggedUser') || 'null');
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data=>{
      this.flightForm=new FormGroup({
        startPoint:new FormControl(data['startPoint']),
        destination:new FormControl(data['destination']),
    })
    })
  }
  getFormsValue(formRef: any) {

    let data = {
     
      firstname: formRef.value.fname,
      lastname: formRef.value.lname,
      email: formRef.value.email,
      phonenumber: formRef.value.phonenumber,
      startPointc: formRef.value.startPoint,
      destinationc: formRef.value.destination,
      passengers: formRef.value.passengers,
      amount: this.calculateAmount,
      date: formRef.value.date,
    };

    this.myhttp.post('/api/users/flightbooking', data, { responseType: 'text' })
      .subscribe(data => {
        console.log(data);
        this.isUserAdded = true;
        formRef.form.reset();
        
      });
      alert(' THANK YOU FOR BOOKING FLIGHT')
      window.location.reload();
     
      
  }

  getAmount() {

    this.isGetAmtClicked = true;

    this.calculateAmount = this.passengers * this.ticketPrize
  }
}
