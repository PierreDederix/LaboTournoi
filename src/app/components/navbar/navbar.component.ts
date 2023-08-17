import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {

  isConnected!: boolean;
  isConnection$$: Subscription; 

  constructor(private _authService : AuthService) {
    this.isConnection$$ = _authService.isConnected$.subscribe( isConnected => this.isConnected = isConnected )
  }
  ngOnDestroy(): void {
    this.isConnection$$.unsubscribe();
  }

  logout() {
    this._authService.logout();
    location.reload()
  }

  

}
