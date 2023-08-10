import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenDTO } from 'src/app/models/token-dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  connectedUser : TokenDTO | undefined;
  isAdmin : boolean;

  constructor(private _authService : AuthService) {
    this.connectedUser = this._authService.user;
    this.isAdmin = _authService.isAdmin;
  }

  
}
