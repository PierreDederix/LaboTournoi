import { Component, OnInit } from '@angular/core';
import { TokenDTO } from 'src/app/models/token-dto';
import { TournamentDTO } from 'src/app/models/tournament-dto';
import { TournamentIndexDTO } from 'src/app/models/tournament-index-dto';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { TournoiService } from 'src/app/services/tournoi.service';

@Component({
  selector: 'app-tournoi',
  templateUrl: './tournoi.component.html',
  styleUrls: ['./tournoi.component.scss']
})
export class TournoiComponent implements OnInit {

  connectedUser : TokenDTO | undefined;

  constructor (private _tournoiService : TournoiService, private _sharedDataService : SharedDataService) {

  }
  
  listeTournoi!: TournamentIndexDTO;
  tournoi! : TournamentDTO;
  
  ngOnInit(): void {
    this._sharedDataService.connectedUser$.subscribe(user =>{
      this.connectedUser = user;
    });
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
