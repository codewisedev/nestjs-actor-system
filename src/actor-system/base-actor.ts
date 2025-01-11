import { Logger } from '@nestjs/common';

export abstract class BaseActor {
  protected readonly logger = new Logger(this.constructor.name);

  /**
   * Abstract method to handle messages.
   */
  abstract receive(message: any): void;

  /**
   * Send a message to another actor.
   */
  send(actor: BaseActor, message: any): void {
    this.logger.log(
      `Sending message: ${JSON.stringify(message)} to ${actor.constructor.name}`,
    );
    actor.receive(message);
  }
}
