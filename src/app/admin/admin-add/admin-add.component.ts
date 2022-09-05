import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {
  
  adminaddFrom:FormGroup= new FormGroup({
    id:new FormControl(),
    startPoint: new FormControl(),
    destination: new FormControl(),
   arrival: new FormControl(),
  departure: new FormControl(),
   amount: new FormControl()

  });
  

constructor(private  formBuilder: FormBuilder,private user:ServicesService) {
  }
ngOnInit(): void {
  }

  postAdd(){
    console.log(this.adminaddFrom.value);
    this.user.addFligth(this.adminaddFrom.value).subscribe((data:any)=>{
 console.log(data);
    })

  }
}