import { HttpStatus, Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger();

  use(req: Request, res: Response, next: NextFunction) {
    res.on('finish', () => {
      const statusCode = res.statusCode;
      switch (statusCode) {
        case HttpStatus.INTERNAL_SERVER_ERROR:
          this.logger.error(`[${req.method}] ${req.url} - ${statusCode}`);
          break;
        case HttpStatus.UNAUTHORIZED:
        case HttpStatus.TOO_MANY_REQUESTS:
          this.logger.warn(`[${req.method}] ${req.url} - ${statusCode}`);
          break;
        // TODO: to add more cases if needed.
        default:
          break;
      }
    });

    next();
  }
}
