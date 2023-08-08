import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TournamentAddDTO } from '../models/tournament-add-dto';
import { TournamentDTO } from '../models/tournament-dto';
import { TournamentIndexDTO } from '../models/tournament-index-dto';

@Injectable({
  providedIn: 'root'
})
export class TournoiService {

  private _urlTournoi : string = "https://khun.somee.com/api/Tournament";

  constructor(private _httpClient : HttpClient) { }

  getTournamentList(url = this._urlTournoi) : Observable<TournamentIndexDTO> {
    return this._httpClient.get<TournamentIndexDTO>(url)
  }

  getTournament(id : string, url = this._urlTournoi) : Observable<TournamentDTO> {
    return this._httpClient.get<TournamentDTO>(url+"/"+id)
  }

  addTournament(tournamentToAdd : TournamentAddDTO) : Observable<TournamentAddDTO> {
    return this._httpClient.post<TournamentAddDTO>(this._urlTournoi, tournamentToAdd)
  }

  deleteTournament(id : string, url = this._urlTournoi) : Observable<TournamentDTO>{
    return this._httpClient.delete<TournamentDTO>(url+"/"+id)
  }
}
