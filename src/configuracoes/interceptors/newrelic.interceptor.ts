import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import * as newrelic from 'newrelic';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class NewrelicInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const handler = context.getHandler();
    const name = `${request.method} ${request.url} ${handler.name}`;

    return newrelic.startWebTransaction(name, function () {
      const transaction = newrelic.getTransaction();
      return next.handle().pipe(
        tap(() => {
          return transaction.end();
        }),
      );
    });
  }
}
