import { Injectable } from '@nestjs/common';
import { BaseActor } from '../base-actor';

@Injectable()
export class ClusterActor extends BaseActor {
  private instances: BaseActor[] = [];
  private currentIndex = 0;

  addInstance(actor: BaseActor): void {
    this.instances.push(actor);
    this.logger.log(`Instance added to cluster: ${actor.constructor.name}`);
  }

  receive(message: any): void {
    if (this.instances.length === 0) {
      this.logger.error('No instances available in the cluster.');
      return;
    }

    const actor = this.instances[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.instances.length;
    this.logger.log(
      `Forwarding message to instance: ${actor.constructor.name}`,
    );
    actor.receive(message);
  }
}
