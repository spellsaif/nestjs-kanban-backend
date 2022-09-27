import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envConfig } from './config/env';


async function bootstrap() {

  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(envConfig.SERVER_PORT, () => {
      console.log("Server is listening to localhost:", envConfig.SERVER_PORT)
    });
  } catch (e) {
    console.log(e);
  }
}
bootstrap();
