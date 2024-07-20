import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { catchHttpErrorException } from './exceptions/http.filter';

type HostTypes = 'http' | 'graphql' | 'ws';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const type = host.getType<HostTypes>();

    switch (type) {
      case 'http':
        const ctx = host.switchToHttp();
        catchHttpErrorException(exception, ctx);
        break;

      case 'graphql':
        break;

      case 'ws':
        break;
    }
  }
}
