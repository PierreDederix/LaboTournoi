import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { UserDTO } from '../models/user-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _urlUsers : string = "https://khun.somee.com/api/member";

  private _$connectedUser : Subject<UserDTO | undefined> = new Subject<UserDTO | undefined>();

  private _users = this.getUsers();

  $connectedUser : Observable<UserDTO | undefined> = this._$connectedUser.asObservable();

  constructor(private _httpClient : HttpClient) { }

  getUsers(url = this._urlUsers) : Observable<UserDTO> {
    return this._httpClient.get<UserDTO>(url);
  }

  login(login : string, password : string) : void {
    let userToFind = this._users.pipe(
      
    );
  }

  logout() : void {
    this._$connectedUser.next(undefined)
    localStorage.removeItem('userId')
  }
}
