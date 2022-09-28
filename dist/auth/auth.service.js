"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const utils_1 = require("../utils");
let AuthService = class AuthService {
    constructor(userService, jwtService, configService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async signToken(userId, email) {
        const payload = {
            sub: userId,
            email
        };
        return this.jwtService.signAsync(payload, {
            expiresIn: '20m',
            secret: this.configService.get('JWT_SECRET')
        });
    }
    async login(userCredentials) {
        const user = await this.userService.findUserByEmail(userCredentials.email);
        if (!user)
            throw new common_1.ForbiddenException('Credentials Incorrect');
        const passwordMatch = await (0, utils_1.comparePassword)(userCredentials.password, user.password);
        if (!passwordMatch)
            throw new common_1.ForbiddenException('Credentials Incorrect');
        const token = await this.signToken(user.id, user.email);
        return { access_token: token };
    }
    async create(userDetails) {
        const { password, confirmPassword } = userDetails, user = __rest(userDetails, ["password", "confirmPassword"]);
        if (password !== confirmPassword)
            throw new common_1.BadRequestException();
        const hashedPassword = await (0, utils_1.hashPassword)(password);
        return this.userService.createUser(Object.assign({ password: hashedPassword }, user));
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(utils_1.Service.USER_SERVICE)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map