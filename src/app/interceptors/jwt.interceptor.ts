import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private readonly _authService : AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this._authService.user) {
      let headers = new HttpHeaders()
      const token = this._authService.user?.token
      headers = headers.append('Authorization', `Bearer ${token}`)
      const newRequest = request.clone({headers : headers})
      return next.handle(newRequest)
    }
    return next.handle(request);
  }
}
