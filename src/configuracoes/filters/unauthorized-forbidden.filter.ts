import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(UnauthorizedException, ForbiddenException)
export class UnauthorizedForbiddenExceptionFilter implements ExceptionFilter {
  async catch(
    excessao: UnauthorizedException | ForbiddenException,
    host: ArgumentsHost,
  ) {
    const contexto = host.switchToHttp();
    const resposta = contexto.getResponse<Response>();
    const status = excessao.getStatus();
    resposta.status(status).send();
  }
}
