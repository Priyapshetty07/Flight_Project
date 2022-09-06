import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-flights-details',
  templateUrl: './flights-details.component.html',
  styleUrls: ['./flights-details.component.css']
})
export class FlightsDetailsComponent implements OnInit {
flight:any;
fromSelected:any;
toSelected:any;
fromOptions:any;
toOptions:any;
  setdata: any;
  constructor(private user:ServicesService) { }

  ngOnInit(): void {
    this.user.getFlights().subscribe((data)=>{
      this.flight= data;
      this.fromOptions=[...new Set(this.flight.map((val: { startPoint: any; })=>val.startPoint))]
      this.toOptions=[...new Set(this.flight.map((val: { destination: any; })=>val.destination))]
    })
  }

}
