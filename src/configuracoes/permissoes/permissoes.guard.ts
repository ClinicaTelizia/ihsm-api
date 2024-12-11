import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PermissoesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const permissoes = this.reflector.get<string[]>(
      'permissoes',
      context.getHandler(),
    );
    if (!permissoes) {
      return true;
    }
    const [requisicao] = context.getArgs();

    const permissoesUsuario = requisicao?.user?.permissions || [];

    const permissoesNecessarias =
      this.reflector.get<string[]>('permissoes', context.getHandler()) || [];

    const temPermissoesNecessarias = permissoesNecessarias.every((permissao) =>
      permissoesUsuario.includes(permissao),
    );

    if (permissoesNecessarias.length === 0 || temPermissoesNecessarias)
      return true;

    throw new ForbiddenException();
  }
}
