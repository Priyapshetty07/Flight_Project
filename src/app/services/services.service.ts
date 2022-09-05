import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  

  constructor(private myhttp: HttpClient) { }
  loginUser(email: string, paswd: string) {
    //rest api call to express
    let loginData = {
      email: email,
      paswd: paswd
    };
   

    return this.myhttp.post('api/users/login', loginData);
  }
  registerDetails(s:any){
      return this.myhttp.post('api/users/login', s);
  }
}


