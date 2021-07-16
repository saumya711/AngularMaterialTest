import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static addUser() {
    throw new Error('Method not implemented.');
  }

  baseUrl: string = 'https://reqres.in/';
  constructor(private http: HttpClient) { }

  userList(){
     return this.http.get(this.baseUrl + 'api/users?page=2');
  }
  addUser(data: any){
    const body = data;
    return this.http.post(this.baseUrl + 'api/users', body);
  }
  updateUser(data: any){
    const body = data;
    return this.http.put(this.baseUrl + 'api/users/2', body);
  }
  deleteUser(id: number){
    return this.http.delete(this.baseUrl + 'api/users/' + id);
  }
}
