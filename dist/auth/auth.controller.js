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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const serializers_1 = require("../serializers");
const utils_1 = require("../utils");
const dtos_1 = require("./dtos");
const login_user_dto_1 = require("./dtos/login-user.dto");
const guards_1 = require("./guards");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    create(createUserDto) {
        const data = this.authService.create(createUserDto);
        return (0, class_transformer_1.plainToClass)(serializers_1.UserSerializer, data);
    }
    login(loginUserDto) {
        return this.authService.login(loginUserDto);
    }
    check() {
        return "Authorization is working!";
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtGuard),
    (0, common_1.Get)('check'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "check", null);
AuthController = __decorate([
    (0, common_1.Controller)(utils_1.Route.AUTH),
    __param(0, (0, common_1.Inject)(utils_1.Service.AUTH_SERVICE)),
    __metadata("design:paramtypes", [Object])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map