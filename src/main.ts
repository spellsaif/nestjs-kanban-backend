import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';



async function bootstrap() {

  try {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe())
    await app.listen(3001, () => {
      console.log("Server is listening to localhost:", 3001)
    });
  } catch (e) {
    console.log(e);
  }
}
bootstrap();
