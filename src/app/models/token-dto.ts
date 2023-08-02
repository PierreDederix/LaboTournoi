import { UserDTO } from "./user-dto";

export interface TokenDTO {
    token : string;
    user : UserDTO;
}