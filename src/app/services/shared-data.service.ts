import { Injectable } from '@angular/core';
import { TokenDTO } from '../models/token-dto';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private connectedUserSubject: BehaviorSubject<TokenDTO | undefined> = new BehaviorSubject<TokenDTO | undefined>(undefined);
  connectedUser$: Observable<TokenDTO | undefined> = this.connectedUserSubject.asObservable();

  setConnectedUser(user: TokenDTO | undefined) {
    this.connectedUserSubject.next(user);
  }
}
