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
  constructor(private user:ServicesService) { }

  ngOnInit(): void {
    this.user.getFlights().subscribe((data)=>{
      this.flight= data;
    })
  }

}
