import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { TokenDTO } from '../models/token-dto';
import { UserDTO } from '../models/user-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _urlUsers : string = "https://khun.somee.com/api";
  private _$connectedUser : BehaviorSubject<TokenDTO | undefined> = new BehaviorSubject<TokenDTO | undefined>(undefined);
  private readonly AUTH_KEY = 'auth'

  constructor(private _httpClient : HttpClient) { }

  login(login : string, password : string): Observable<TokenDTO> {
    return this._httpClient.post<TokenDTO>(this._urlUsers+'/login', {username: login, password: password}).pipe(
      tap( () => console.log(login, password)),
      tap( auth => this.user = auth )
    )
  }

  logout() : void {
    this.user = undefined
  }

  get $connectedUser() : Observable<TokenDTO | undefined> { 
    return this._$connectedUser.asObservable();
  }

  get isConnected$(): Observable<boolean> {
    return this._$connectedUser.pipe(
      map(auth => auth !== undefined)
    )
  }

  get isConnected() {
    return this.user !== undefined
  }

  get token(): string | undefined {
    return this.user?.token
  }

  get isAdmin(): boolean {
    return this.user?.user.role === 'Admin'
  }

  get user() : TokenDTO | undefined {
    const authString = localStorage.getItem(this.AUTH_KEY)
    if( authString )
      return JSON.parse( authString ) as TokenDTO
    else
      return undefined
  }

  set user(value: TokenDTO | undefined){
    if( value )
      localStorage.setItem(this.AUTH_KEY, JSON.stringify(value))
    else 
      localStorage.removeItem( this.AUTH_KEY )

    this._$connectedUser.next( this.user )
  }

}
