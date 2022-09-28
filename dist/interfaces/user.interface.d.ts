import { UserDetails } from "src/types";
export interface IUserService {
    createUser(userDetails: UserDetails): any;
    findUserByEmail(email: string): any;
}
