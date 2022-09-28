import { BadRequestException, ForbiddenException, Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { IAuthService, IUserService } from "src/interfaces";
import { comparePassword, hashPassword, Service } from "src/utils";
import { CreateUserDto } from "./dtos";
import { LoginUserDto } from "./dtos/login-user.dto";

@Injectable()
export class AuthService implements IAuthService {
    constructor(
        @Inject(Service.USER_SERVICE) private userService: IUserService,
        private jwtService: JwtService,
        private configService: ConfigService
    ) { }


    async signToken(userId: number, email: string) {
        const payload = {
            sub: userId,
            email
        }

        return this.jwtService.signAsync(payload, {
            expiresIn: '20m',
            secret: this.configService.get('JWT_SECRET')
        })
    }


    async login(userCredentials: LoginUserDto): Promise<{ access_token: string }> {
        const user = await this.userService.findUserByEmail(userCredentials.email);

        if (!user)
            throw new ForbiddenException('Credentials Incorrect');

        const passwordMatch = await comparePassword(userCredentials.password, user.password);

        if (!passwordMatch)
            throw new ForbiddenException('Credentials Incorrect');

        const token = await this.signToken(user.id, user.email);

        return { access_token: token };


    }

    async create(userDetails: CreateUserDto) {
        const { password, confirmPassword, ...user } = userDetails;

        if (password !== confirmPassword)
            throw new BadRequestException()

        const hashedPassword = await hashPassword(password);

        return this.userService.createUser({ password: hashedPassword, ...user });

    }
}