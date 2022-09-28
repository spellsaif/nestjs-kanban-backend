import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { UserService } from "src/shared/services/user.service";
import { Service } from "src/utils";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./strategy";

@Module({

    imports: [JwtModule.register({})],
    controllers: [AuthController],
    providers: [
        {
            provide: Service.AUTH_SERVICE,
            useClass: AuthService
        },

        {
            provide: Service.USER_SERVICE,
            useClass: UserService
        },
        JwtStrategy
    ]
})
export class AuthModule { }