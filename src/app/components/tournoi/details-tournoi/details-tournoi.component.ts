import { Component } from '@angular/core';
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

  constructor(private _tournoiService : TournoiService) {}

  // ngOnInit(): void {
  //   this._tournoiService.getTournament().subscribe({
  //     next : (tournoi) => {
  //       this.tournoi = tournoi;
  //     },
  //     error : (err) => {
  //       console.log(err);
  //     },
  //     complete : () => {
  //       console.log("Succès");
  //     }
  //   })
  // }
}
