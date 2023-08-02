import { TournamentCategory } from "./tournament-category";
import { TournamentStatus } from "./tournament-status";

export interface TournamentDTO {
    id : string;
    name : string;
    location : string;
    minPlayers : number;
    maxPlayers : number;
    eloMin : number;
    eloMax : number;
    categories : TournamentCategory[];
    womenOnly : boolean;
    endOfRegistrationDate : string;
    count : number;
    canRegister : boolean;
    isRegistered : boolean;
    status : TournamentStatus;
    currentRound : number;
}