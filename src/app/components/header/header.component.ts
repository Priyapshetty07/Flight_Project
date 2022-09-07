import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  role: any;
  isLogin: Boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.role = localStorage.getItem('role');
    console.log(this.role);
    if (localStorage.getItem('login') == 'true') {
      this.isLogin = true;
    } else if (localStorage.getItem('login') == 'false') {
      this.isLogin = false;
    }

  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/admin'])

  }

}
