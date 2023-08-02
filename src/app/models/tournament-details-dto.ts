import { MatchDTO } from "./match-dto";
import { TournamentCategory } from "./tournament-category";
import { TournamentStatus } from "./tournament-status";
import { UserDTO } from "./user-dto";

export interface TournamentDetailsDTO {
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
    players  : UserDTO[];
    canStart : boolean;
    canValidateRound : boolean;
    matches : MatchDTO[];
}