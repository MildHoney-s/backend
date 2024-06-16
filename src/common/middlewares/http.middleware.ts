/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common'

@Catch(HttpException)
export class CustomHttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse()

    const status = exception.getStatus()
    const message = exception.getResponse() as string | object

    if (status === 400 && typeof message === 'object') {
      if (Array.isArray((message as any)?.message)) {
        const result = (message as any)?.message[0]
        response.status(status).json({
          code: `${status}`,
          message: `${result.charAt(0).toUpperCase()}${result.slice(1)}`,
        })
      } else {
        const result = (message as any)?.message
        response.status(status).json({
          code: `${status}`,
          message: `${result.charAt(0).toUpperCase()}${result.slice(1)}`,
        })
      }
    } else {
      response.status(status).json(message)
    }
  }
}
