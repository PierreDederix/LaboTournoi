import { MatchResult } from "./match-result";

export interface MatchDTO {
    id : number;
    tournamentId : string;
    blackName : string;
    blackId : string;
    whiteName : string;
    whiteId : string;
    result : MatchResult;
    round : number;
}