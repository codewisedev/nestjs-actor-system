import { Injectable } from '@nestjs/common';
import { BaseActor } from '../base-actor';

@Injectable()
export class MyActor extends BaseActor {
  receive(message: any): void {
    this.logger.log(`MyActor received message: ${JSON.stringify(message)}`);
    if (message.type === 'greet') {
      this.logger.log(`Hello, ${message.payload.name}!`);
    }
  }
}
