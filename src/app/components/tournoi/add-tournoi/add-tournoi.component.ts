import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-tournoi',
  templateUrl: './add-tournoi.component.html',
  styleUrls: ['./add-tournoi.component.scss']
})
export class AddTournoiComponent {
  tournoiForm : FormGroup

  constructor( private _fb : FormBuilder) {
    this.tournoiForm = this._fb.group({
      name : [null, [Validators.required, Validators.maxLength(100)]],
      location : [null, [Validators.maxLength(100)]],
      minPlayers : [null, [Validators.required, Validators.min(2), Validators.max(16)]],
      maxPlayers : [null, [Validators.required, Validators.min(2), Validators.max(16)]],
      eloMin : [null, [Validators.min(0), Validators.max(3000)]],
      eloMax : [null, [Validators.min(0), Validators.max(3000)]],
      // categories : [null, [Validators.required]],
      womenOnly : [null, []],
      endOfRegistrationDate : [null, [Validators.required]]
    })
  }

  addTournoi() {

  }
}
