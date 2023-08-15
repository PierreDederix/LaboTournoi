import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TokenDTO } from 'src/app/models/token-dto';
import { AuthService } from 'src/app/services/auth.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit, OnDestroy {
  connectedUser : TokenDTO | undefined;
  connectForm : FormGroup;

  userSubscription : Subscription = new Subscription();

  constructor(private _sharedDataService : SharedDataService, private _authService: AuthService, private _fb : FormBuilder, private _router : Router) {
    this.connectForm = this._fb.group({
      login : [null, [Validators.required]],
      password : [null, [Validators.required]],
    })
  }
  
  ngOnInit(): void {
     this.userSubscription = this._authService.$connectedUser.subscribe({
       next : (newUser : TokenDTO | undefined) => {
         this.connectedUser = newUser;
         this._sharedDataService.setConnectedUser(newUser)
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
    
    if (this.connectForm.valid) {
      this._authService.login(this.connectForm.value.login, this.connectForm.value.password)
        .subscribe({
          next: () => this._router.navigateByUrl('/accueil')
      });
    }
    else {
      this.connectForm.markAllAsTouched();
    }
  }

  disconnect() {
    this._authService.logout();
    this._router.navigateByUrl("/tournoi");
  }

}
