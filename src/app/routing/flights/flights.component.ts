import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  flightL: any

  city = [{

    traveltime: '12h 35m',
    totime: '12:35 PM',
    fromtime: '04:20 AM',
    way: '1 stop via Mumbai'
  },
  {
    traveltime: '11h 35m',
    totime: '04:40 PM',
    fromtime: '05:15 AM',
    way: '1 stop via Dhoba'
  },
  {
    traveltime: '9h 20m',
    totime: '8:45 PM',
    fromtime: '011:25 AM',
    way: '1 stop via Mumbai'
  },
  {
    traveltime: '11h 25m',
    totime: '2:00 AM',
    fromtime: '05:00 PM',
    way: '  1 stop via dubai'
  },
  {
    traveltime: '10h 15m',
    totime: '5:00 AM',
    fromtime: '06:20 PM',
    way: '  1 stop via Dhoba'
  },
  {
    traveltime: '8h 20m',
    totime: '06:30 AM',
    fromtime: '010:30 PM',
    way: '1 stop via Bahrain'
  },

  ]
 


  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data: any) => this.flightL = data)
  }

}
