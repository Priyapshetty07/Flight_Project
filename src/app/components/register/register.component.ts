import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { LoginComponent } from '../login/login.component';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errmsg = '';
  type = '';
  myform: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(7)]),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required)
  });



  userlist: any;

  constructor(private myusersrv: ServicesService
  ,public dialog: MatDialog,private route:Router,private router: ActivatedRoute) { }

  ngOnInit(): void {
    
  }
  getValues() {
    // console.log('hello');
    if (this.myform.valid) {
      alert("successfully register")
      this.myusersrv.registerDetails(this.myform.value).subscribe((data: any) => {
        console.log(this.myform.value)
        this.myform.reset();
      })
    } else {
      this.errmsg="please enter all fields";
    }

  }

  login() {
    let dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe((result: string) => {
      if(result=='success') {
        window.location.reload()
      }
    });
  }
}








