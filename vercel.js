"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const app_module_1 = require("./src/app.module");
const serverless = require("serverless-http");
let cachedServer;
const bootstrap = async () => {
    if (!cachedServer) {
        const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter());
        await app.init();
        cachedServer = serverless(app.getHttpServer());
    }
    return cachedServer;
};
const handler = async (event, context) => {
    const server = await bootstrap();
    return server(event, context);
};
exports.handler = handler;
//# sourceMappingURL=vercel.js.map