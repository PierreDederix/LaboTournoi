import { Component, OnInit } from '@angular/core';
import { TournamentDTO } from 'src/app/models/tournament-dto';
import { TournamentIndexDTO } from 'src/app/models/tournament-index-dto';
import { TournoiService } from 'src/app/services/tournoi.service';

@Component({
  selector: 'app-tournoi',
  templateUrl: './tournoi.component.html',
  styleUrls: ['./tournoi.component.scss']
})
export class TournoiComponent implements OnInit {
  constructor (private _tournoiService : TournoiService) {

  }
  
  listeTournoi!: TournamentIndexDTO;
  tournoi! : TournamentDTO;
  
  ngOnInit(): void {
    this._tournoiService.getTournamentList().subscribe({
      next : (listeTournoi) => {
        this.listeTournoi = listeTournoi;
      },
      error : (err) => {
        console.log(err);
      },
      complete : () => {
        console.log("Succès");
      }
    })
  }

  getOne(url : string) : void {
    this._tournoiService.getTournament(url).subscribe({
      next : (tournoi) => {
        this.tournoi = tournoi;
      },
      error : (err) => {
        console.log(err);
      },
      complete : () => {
        console.log("Succès");
      }
    })
  }

  delete (id : string) {
    this._tournoiService.deleteTournament(id).subscribe();
  }
}
