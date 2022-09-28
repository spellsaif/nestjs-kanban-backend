"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envConfig = void 0;
const config_1 = require("@nestjs/config");
const env = new config_1.ConfigService();
exports.envConfig = {
    SERVER_PORT: env.get('SERVER_PORT'),
    JWT_SECRET: env.get('JWT_SECRET')
};
//# sourceMappingURL=env.js.map