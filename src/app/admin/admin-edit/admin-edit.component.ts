import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  //   myform: FormGroup = new FormGroup({
  //     from: new FormControl(''),
  //     to: new FormControl(''),
  //     arrival: new FormControl(''),
  //     departure: new FormControl(''),
  //     amount: new FormControl('')

  //   });



  //   constructor(public dialog: MatDialog) { }

  //   ngOnInit(): void {
  //   }
  //   login() {
  //     let dialogRef = this.dialog.open(AdminEditComponent);
  //     dialogRef.afterClosed().subscribe((result: string) => {
  //       if(result=='success') {
  //         window.location.reload()
  //       }
  //     });
  //   }
  // }

  admineditFrom: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.admineditFrom = formBuilder.group({
id:new FormControl(),
      startPoint: new FormControl(),
      destination: new FormControl(),
      arrival: new FormControl(),
      departure: new FormControl(),
      amount: new FormControl()

    });
  }
  ngOnInit(): void {
  }

  postedit() {
    console.log(this.admineditFrom.value);

  }
}
