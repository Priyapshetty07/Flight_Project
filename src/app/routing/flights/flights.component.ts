import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../services/services.service';
@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flights: any[] = [];
  flightL: any
  startPoint: any;
  destination: any;
 

  constructor(private route: ActivatedRoute, private user: ServicesService) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data: any) => {
      this.flightL = data.data;
      this.startPoint = data.startPoint;
      this.destination = data.destination;
      this.user.getFlights().subscribe((data: any) => {
        console.log(data)
        let searchData = data;
        this.flights = searchData.filter((val: {startPoint: any; destination: any; }) => val.startPoint == this.startPoint && val.destination == this.destination)
        //  this.flights=data.filter(val:any=>{
        //   val.from==this.from && val.to==this.to;
        //  })
        console.log(this.flights)

      })
    })
  }

}
