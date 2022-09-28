import { UserDetails } from "src/types";

export interface IUserService {
    createUser(userDetails: UserDetails);
    findUserByEmail(email: string);
}