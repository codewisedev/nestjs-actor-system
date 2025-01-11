import { Module } from '@nestjs/common';
import { ActorSystemService } from './actor-system/actor-system.service';
import { MyActor } from './actor-system/actors/my-actor';
import { ClusterActor } from './actor-system/actors/cluster-actor';
import { RemoteActor } from './actor-system/actors/remote-actor';
import { StaticDataResource } from './actor-system/resources/static-data-resource';

@Module({
  providers: [
    ActorSystemService,
    MyActor,
    ClusterActor,
    RemoteActor,
    StaticDataResource,
  ],
})
export class AppModule {}
