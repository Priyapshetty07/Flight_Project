import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  myform: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
    paswd: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)])
  });

  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl?: string;

  userMessage: string = '';
  route: any;
  dialogRef: any;
  router: any;
  myuser: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      paswd: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  register() {
    this.dialogRef.close();
    this.router.navigate(['/register'])
  }
  
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // this.loading = false;


    this.myuser.loginUser(this.f['email'].value, this.f['paswd'].value)
      .subscribe(
        {
          next: (data: any) => {
            this.loading = true;


            if (data.length) {
              this.loading = false;
              localStorage.setItem('username',data[0].firstname+' '+data[0].lastname);
              localStorage.setItem('login','true');
              localStorage.setItem('email',data[0].email);
              localStorage.setItem('firstname',data[0].firstname)
              localStorage.setItem('lastname',data[0].lastname)
              this.dialogRef.close('success');
              
              // this.router.navigate(['/about-us'])
            } else {
              this.userMessage = 'Login user not found, please enter correct email and password';
            }

          },
          error: (e:any) => {
            this.loading = false;
            console.error(e)
          }
        }
      )


  }
}
