import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentDTO } from 'src/app/models/tournament-dto';
import { TournamentIndexDTO } from 'src/app/models/tournament-index-dto';
import { TournoiService } from 'src/app/services/tournoi.service';

@Component({
  selector: 'app-details-tournoi',
  templateUrl: './details-tournoi.component.html',
  styleUrls: ['./details-tournoi.component.scss']
})
export class DetailsTournoiComponent {
  tournoi! : TournamentDTO;
  tournoiId : string;

  constructor(private _tournoiService : TournoiService, private _activeRoute : ActivatedRoute) {
    this.tournoiId = _activeRoute.snapshot.params["id"];
  }

    ngOnInit(): void {
     //this.tournoi = this._tournoiService.getTournament(this.tournoiId);
    }
}
