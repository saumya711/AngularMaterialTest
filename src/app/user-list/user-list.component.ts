import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserService } from '../services/user.service';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  user:any;
  [x: string]: any;
  displayedColumns: string[] = ['user_id', 'avatar', 'firstName', 'lastName', 'email', 'Action'];
  userList:any= [];
  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers();

  }

  getUsers(){
    this.userService.userList().subscribe(data => {
      this.userList = data;
    });
  }

  addUser(){
    let dialogRef = this.dialog.open(AddUserComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
    this.user = result;
      this.getUsers();
    });
  }
updateUser(){
  let dialogRef = this.dialog.open(UpdateUserComponent, {
    data : {
      name: this.user.name,
      job: this.user.job
    }
  });
  dialogRef.afterClosed().subscribe(result => {
    this.user = result;
      this.getUsers();
    });
}

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe(result => {
    console.log('delete');
    this.getUsers();
    });
  }

}
