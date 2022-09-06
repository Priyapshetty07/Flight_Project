import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'flight';
  ngOnInit(){
    localStorage.setItem('login', 'false');
    localStorage.setItem('role','user');
  }
}
