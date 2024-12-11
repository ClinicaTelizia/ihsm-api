import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as Sentry from '@sentry/node';
import { ProfilingIntegration } from '@sentry/profiling-node';
import { useContainer } from 'class-validator';

import { AppModule } from './app.module';
import { SentryFilter } from './configuracoes/filters/sentry.filter';
import { UnauthorizedForbiddenExceptionFilter } from './configuracoes/filters/unauthorized-forbidden.filter';
import { NewrelicInterceptor } from './configuracoes/interceptors/newrelic.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);

  app.enableCors({
    origin: configService.get<string>('CLIENT_ORIGIN_URL'),
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  });

  Sentry.init({
    dsn: configService.get<string>('SENTRY_DNS'),
    integrations: [new ProfilingIntegration()],
    tracesSampleRate: 1.0,
    profilesSampleRate: 1.0,
  });
  const { httpAdapter } = app.get(HttpAdapterHost);

  app.useGlobalFilters(
    new SentryFilter(httpAdapter),
    new UnauthorizedForbiddenExceptionFilter(),
  );

  app.useGlobalInterceptors(new NewrelicInterceptor());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Documentação Swagger')
    .setDescription('Rotas e Exemplos de uso da API')
    .setVersion('1.0')
    .addBearerAuth()
    .addSecurityRequirements('bearer')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);

  await app.listen(configService.get<string>('PORT') || 3000);
}
bootstrap();
