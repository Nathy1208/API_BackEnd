import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

 // Habilita o CORS para que seu front-end possa acessar a API
  app.enableCors({
    origin: 'http://localhost:5173', // A URL do seu front-end (Vite usa 5173 por padrão)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
