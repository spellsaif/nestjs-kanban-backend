import { CreateUserDto } from "src/auth/dtos";
import { LoginUserDto } from "src/auth/dtos/login-user.dto";

export interface IAuthService {
    create(userDetails: CreateUserDto);
    login(userCredentials: LoginUserDto);
    signToken(userId: number, email: string);
}