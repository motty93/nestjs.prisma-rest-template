import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)

  // Swagger
  // if (configService.get('NODE_ENV') === 'development') {
  //   const config = new DocumentBuilder()
  //     .setTitle('解約レコメンドメールAPI')
  //     .build()
  //   const document = SwaggerModule.createDocument(app, config)
  //   SwaggerModule.setup('swagger', app, document)
  // }

  app.enableCors()
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))

  await app.listen(configService.get('PORT') || 8080)
}
bootstrap()
