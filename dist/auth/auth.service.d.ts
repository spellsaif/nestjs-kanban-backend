import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { IAuthService, IUserService } from "src/interfaces";
import { CreateUserDto } from "./dtos";
import { LoginUserDto } from "./dtos/login-user.dto";
export declare class AuthService implements IAuthService {
    private userService;
    private jwtService;
    private configService;
    constructor(userService: IUserService, jwtService: JwtService, configService: ConfigService);
    signToken(userId: number, email: string): Promise<string>;
    login(userCredentials: LoginUserDto): Promise<{
        access_token: string;
    }>;
    create(userDetails: CreateUserDto): Promise<any>;
}
