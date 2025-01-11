import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ActorSystemService {
  private readonly logger = new Logger(ActorSystemService.name);
  private actors = new Map<string, any>();

  /**
   * Register an actor in the system.
   */
  registerActor(name: string, actor: any): void {
    this.actors.set(name, actor);
    this.logger.log(`Actor "${name}" registered.`);
  }

  /**
   * Send a message to an actor.
   */
  sendMessage(actorName: string, message: any): void {
    const actor = this.actors.get(actorName);
    if (!actor) {
      this.logger.error(`Actor "${actorName}" not found.`);
      return;
    }
    actor.receive(message);
  }
}
