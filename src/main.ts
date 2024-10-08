import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger
  const options = new DocumentBuilder().setTitle(`Courses API`).setVersion(`0.1`).setDescription(`Api for list courses`).build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document)
  //
  
  await app.listen(3000);
}
bootstrap();
