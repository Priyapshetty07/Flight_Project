import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  errmsg='';

  myform: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
    paswd: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
    cpaswd: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)])
  });
  
  
  constructor(private userSerivice:ServicesService,private router:Router) { }

  ngOnInit(): void {
  }
getValues(){

if(this.myform.valid)
{
  // this.userSerivice['forgetDeatils'](this.myform.value).subscribe((data: any)=>{
  //   console.log(data);
  //   alert("Suceesfully Reset password");
  //   this.myform.reset();
  //   this.router.navigate(['/home'])
    
  // });
}
else{
  this.errmsg="Please fill details correctly";
}
}
}

