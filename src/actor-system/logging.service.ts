import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable()
export class LoggingService {
  private readonly logger = new Logger('ActorSystemLogger');

  logInfo(message: string): void {
    this.logger.log(message);
  }

  logError(message: string): void {
    this.logger.error(message);
  }
}
