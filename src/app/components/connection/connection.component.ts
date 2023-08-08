import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserDTO } from 'src/app/models/user-dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit, OnDestroy {
  connectedUser : UserDTO | undefined;
  
  login : string = "";
  password : string = "";

  userSubscription : Subscription = new Subscription();

  constructor(private _authService: AuthService) {

  }
  
  ngOnInit(): void {
    this.userSubscription = this._authService.$connectedUser.subscribe({
      next : (newUser : UserDTO | undefined) => {
        this.connectedUser = newUser;
      },
      error : (error) => {
        console.log(error);
      },
      complete : () => {
        console.log("Succès");
        
      }
    })
  }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  connect() {
    this._authService.login(this.login, this.password)
    this.login = "";
    this.password = "";
  }

  disconnect() {
    this._authService.logout();
  }

}
