import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { HttpException, HttpStatus } from '@nestjs/common';

export const catchHttpErrorException = (
  exception: any,
  ctx: HttpArgumentsHost,
) => {
  // console.log(333);
  const request = ctx.getRequest();
  const response = ctx.getResponse();

  const status =
    exception instanceof HttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

  const errorResponse = {
    statusCode: status,
    timestamp: new Date().toISOString(),
    path: request.url,
    exception: exception,
    message: exception?.response?.message ?? 'Internal server error',
  };

  response.status(status).json(errorResponse);
};
