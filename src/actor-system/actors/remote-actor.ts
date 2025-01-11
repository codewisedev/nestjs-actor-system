import { Injectable } from '@nestjs/common';
import { BaseActor } from '../base-actor';

@Injectable()
export class RemoteActor extends BaseActor {
  receive(message: any): void {
    this.logger.log(`RemoteActor received message: ${JSON.stringify(message)}`);
    if (message.type === 'remoteCall') {
      this.logger.log(`Processing remote call for ${message.payload.data}`);
    }
  }
}
