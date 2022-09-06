import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private myhttp: HttpClient) { }


  registerDetails(data: any) {
    return this.myhttp.post('http://localhost:4200/api/users/register', data, { responseType: 'text' })
  }

  getFlights() {
    return this.myhttp.get('http://localhost:4200/api/users/flight')
  }

  loginUser(email: string, password: string) {

    //rest api call to express

    let loginData = {
      email: email,
      password: password
    };
    return this.myhttp.post('http://localhost:4200/api/users/login', loginData);

  }
  //add api call
  addFligth(data: any) {
    return this.myhttp.post('http://localhost:4200/api/users/flight', data);
  }

  //delete api call
  delete(userid: any) {
    return this.myhttp.delete(`api/users/flightdel/${userid}`);
  };

  //edit api call
  edit(val: any) {
    return this.myhttp.post('http://localhost:4200/api/users/flight',val,{ responseType: 'json' });
  }
}


