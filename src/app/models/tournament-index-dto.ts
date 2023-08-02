import { TournamentDTO } from "./tournament-dto";

export interface TournamentIndexDTO {
    total : number;
    results : TournamentDTO[];
}