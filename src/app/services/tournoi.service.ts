import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TournamentAddDTO } from '../models/tournament-add-dto';

@Injectable({
  providedIn: 'root'
})
export class TournoiService {

  private _urlTournoi : string = "https://khun.somee.com/api/tournament";

  constructor(private _httpClient : HttpClient) { }

  addTournament(tournamentToAdd : TournamentAddDTO) : Observable<TournamentAddDTO> {
    return this._httpClient.post<TournamentAddDTO>(this._urlTournoi, tournamentToAdd)
  }
}
