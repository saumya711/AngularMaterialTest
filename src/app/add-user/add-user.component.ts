import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  submitted = false;
  registerForms!: FormGroup;
  user: any;
  constructor(private formBuilder: FormBuilder, private userService: UserService, public dialogRef : MatDialogRef<AddUserComponent>) {
  }

  ngOnInit(): void {
    this.registerForms = this.formBuilder.group({
      name: ['', Validators.required],
      job: ['', Validators.required],
    });
  }

  get f() {
    return this.registerForms.controls;
  }
  onSubmit() {
     this.submitted = true;

    if (this.registerForms.invalid) {
      return;
    }
    console.log("success")

    this.addUser();
    this.onReset();
  }

  onReset() {
    this.submitted = false;
    const data = {
      name: this.registerForms.value.name,
     job: this.registerForms.value.job
    }
    this.registerForms.reset();
    this.dialogRef.close(data);
  }

  addUser() {
    const user = {
     name: this.registerForms.value.name,
     job: this.registerForms.value.job
    };
    this.userService.addUser(user).subscribe(data => {
      this.user = data;
      alert('SUCCESS!! :-) \n\n' + JSON.stringify(data, null, 4));
    });

  }
}

