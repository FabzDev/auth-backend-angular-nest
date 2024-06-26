import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
    )
    
    if (module.hot) {
      module.hot.accept();
      module.hot.dispose(() => app.close());
    }
    app.enableCors();
    await app.listen(process.env.PORT ?? 3000);
  }
bootstrap();
