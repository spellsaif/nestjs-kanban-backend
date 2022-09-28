import { IAuthService } from "src/interfaces";
import { UserSerializer } from "src/serializers";
import { CreateUserDto } from "./dtos";
import { LoginUserDto } from "./dtos/login-user.dto";
export declare class AuthController {
    private authService;
    constructor(authService: IAuthService);
    create(createUserDto: CreateUserDto): UserSerializer;
    login(loginUserDto: LoginUserDto): any;
    check(): string;
}
