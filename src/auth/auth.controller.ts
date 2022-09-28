import { Body, Controller, Get, Inject, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { plainToClass } from 'class-transformer';

import { IAuthService } from "src/interfaces";
import { UserSerializer } from "src/serializers";
import { Route, Service } from "src/utils";
import { CreateUserDto } from "./dtos";
import { LoginUserDto } from "./dtos/login-user.dto";
import { JwtGuard } from "./guards";

@Controller(Route.AUTH)
export class AuthController {

    constructor(@Inject(Service.AUTH_SERVICE) private authService: IAuthService) { }

    @Post('create')
    create(@Body() createUserDto: CreateUserDto) {
        const data = this.authService.create(createUserDto);

        return plainToClass(UserSerializer, data);
    }

    @Post('login')
    login(@Body() loginUserDto: LoginUserDto) {
        return this.authService.login(loginUserDto);
    }

    @UseGuards(JwtGuard)
    @Get('check')
    check() {
        return "Authorization is working!";
    }
}