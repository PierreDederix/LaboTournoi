import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { TournamentCategory } from 'src/app/models/tournament-category';
import { TournoiService } from 'src/app/services/tournoi.service';

@Component({
  selector: 'app-add-tournoi',
  templateUrl: './add-tournoi.component.html',
  styleUrls: ['./add-tournoi.component.scss']
})
export class AddTournoiComponent {
  tournoiForm : FormGroup;
  categories = Object.values(TournamentCategory);
  category : any = '';

  constructor( private _fb : FormBuilder, private _tournoiService : TournoiService, private _router : Router) {
    this.tournoiForm = this._fb.group({
      name : [null, [Validators.required, Validators.maxLength(100)]],
      location : [null, [Validators.maxLength(100)]],
      minPlayers : [null, [Validators.required, Validators.min(2), Validators.max(16)]],
      maxPlayers : [null, [Validators.required, Validators.min(2), Validators.max(16)]],
      eloMin : [null, [Validators.min(0), Validators.max(3000)]],
      eloMax : [null, [Validators.min(0), Validators.max(3000)]],
      categories : this._fb.array([], [Validators.required]),
      womenOnly : [false, []],
      endOfRegistrationDate : [null, [Validators.required]]
    })
  }

  get categoryFormArray(): FormArray {
    return this.tournoiForm.get('categories') as FormArray;
  }

  updateCategories(event: any) {
    const value = event.target.value;
    if (event.target.checked) {
      this.categoryFormArray.push(this._fb.control(value));
    } else {
      const index = this.categoryFormArray.value.indexOf(value);
      if (index >= 0) {
        this.categoryFormArray.removeAt(index);
      }
    }
  }

  addTournoi() {
    if (this.tournoiForm.valid) {
      console.log(this.tournoiForm.value);
      
      this._tournoiService.addTournament(this.tournoiForm.value).subscribe(data => console.log(data))
      this._router.navigateByUrl('/tournoi')
    }
    else {
      this.tournoiForm.markAllAsTouched();
    }
  }
}
