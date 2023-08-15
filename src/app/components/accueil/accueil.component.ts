import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenDTO } from 'src/app/models/token-dto';
import { AuthService } from 'src/app/services/auth.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  connectedUser : TokenDTO | undefined;

  constructor( private _sharedDataService : SharedDataService) {
    this._sharedDataService.connectedUser$.subscribe(user => {
      this.connectedUser = user;
    });
  }

  
}
