import { CreateUserDto } from "src/auth/dtos";
import { LoginUserDto } from "src/auth/dtos/login-user.dto";
export interface IAuthService {
    create(userDetails: CreateUserDto): any;
    login(userCredentials: LoginUserDto): any;
    signToken(userId: number, email: string): any;
}
