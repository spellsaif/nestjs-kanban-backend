"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const env_1 = require("./config/env");
async function bootstrap() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        await app.listen(env_1.envConfig.SERVER_PORT, () => {
            console.log("Server is listening to localhost:", env_1.envConfig.SERVER_PORT);
        });
    }
    catch (e) {
        console.log(e);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map