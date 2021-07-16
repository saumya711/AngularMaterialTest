import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  submitted = false;
  registerForms!: FormGroup;
  user: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService, public dialogRef : MatDialogRef<UpdateUserComponent>, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  updateUser(){
this.userService.updateUser(this.data).subscribe(result => {
alert('uSER UPDATE SUCCESS!! :-) \n\n' + JSON.stringify(result, null, 4))}
);
this.dialogRef.close(this.data);
  }

}
