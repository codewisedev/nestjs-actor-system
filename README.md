# NestJS Actor Model Example

This project demonstrates an implementation of the Actor Model in NestJS.

## Features
- Actor System for message passing.
- Clustered Actors for load balancing.
- Remote Actor simulation.

## File tree
```bash
src
├── actor-system
│   ├── actors
│   │   ├── cluster-actor.ts
│   │   ├── my-actor.ts
│   │   └── remote-actor.ts
│   ├── actor-system.service.ts
│   ├── base-actor.ts
│   ├── logging.service.ts
│   └── resources
│       └── static-data-resource.ts
├── app.module.ts
└── main.ts
```

## How to Run
1. Install dependencies:
   ```bash
   yarn
   ```
2. Run project
   ```bash
   yarn start
   ```
