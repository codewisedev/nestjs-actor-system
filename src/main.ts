import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ActorSystemService } from './actor-system/actor-system.service';
import { MyActor } from './actor-system/actors/my-actor';
import { ClusterActor } from './actor-system/actors/cluster-actor';
import { RemoteActor } from './actor-system/actors/remote-actor';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const actorSystem = app.get(ActorSystemService);
  const myActor = app.get(MyActor);
  const clusterActor = app.get(ClusterActor);
  const remoteActor = app.get(RemoteActor);

  // Register actors
  actorSystem.registerActor('myActor', myActor);
  actorSystem.registerActor('clusterActor', clusterActor);
  actorSystem.registerActor('remoteActor', remoteActor);

  // Add instances to the cluster
  clusterActor.addInstance(myActor);
  clusterActor.addInstance(remoteActor);

  // Send messages
  actorSystem.sendMessage('myActor', {
    type: 'greet',
    payload: { name: 'Alice' },
  });
  actorSystem.sendMessage('clusterActor', {
    type: 'greet',
    payload: { name: 'Bob' },
  });
  actorSystem.sendMessage('remoteActor', {
    type: 'remoteCall',
    payload: { data: 'Some data' },
  });
}
bootstrap();
