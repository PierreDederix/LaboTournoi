import { TournamentCategory } from "./tournament-category";

export interface TournamentAddDTO {
    name : string;
    location : string;
    minPlayers : number;
    maxPlayers : number;
    eloMin : number | null;
    eloMax : number | null;
    categories : TournamentCategory[];
    womenOnly : boolean;
    endOfRegistrationDate : string;
}