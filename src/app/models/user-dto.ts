import { UserGender } from "./user-gender";
import { UserRole } from "./user-role";

export interface UserDTO {
    id : string;
    username : string;
    email : string;
    birthDate : string;
    elo : number;
    gender : UserGender;
    role : UserRole;
}