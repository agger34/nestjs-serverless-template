<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


## Required

```bash
- nodejs
- jdk
```

## Installation

```bash
$ npm install serverless -g
$ npm install

# to sync 
$ serverless plugin install -n serverless-dynamodb-local
$ serverless plugin install -n serverless-offline
$ serverless plugin install -n serverless-jetpack

# to install dynamondb
$ serverless dynamodb install

```

## Running the app to develop

```bash
# to run dynamodb locally
$ docker-compose up -d

# to create/update .env file

# to run/debug app
$ npm run start
```


## Running the app to test serverless

```bash
$ npm run start:serverless
```

## Running dynamodb-admin

```bash
# to install dynamodb-admin
$ npm install -g dynamodb-admin

# to set DYNAMO_ENDPOINT
## linux
$ export DYNAMO_ENDPOINT=http://localhost:8000
## windows
$ set DYNAMO_ENDPOINT=http://localhost:8000

# to run dynamodb-admin
$ dynamodb-admin
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

```bash
TBU
```

## Folder Structure

```bash
# 1. Overview
├───src
│   ├───database     # Database provider files, ex: mongodb, mysql
│   ├───decorator    # Decorator files, ex: @Roles
│   ├───guard        # Guard files, ex: JwtAuthGuard
│   ├───middleware   # Middleware files, ex: Logger
│   ├───module       # Source files, internal and external modules
│   │   ├───auth
│   │   ├───todo     # A sample todo modules include
│   │   └───user
│   ├───script       # Script files to run other process built with NestJs also
│   └───shared       # Enum, Constant, Helper.. to share across the system
└───test

# 2. Sample module details
.      
├───module
│   ├───todo
│   │       todo.controller.ts
│   │       todo.dto.ts
│   │       todo.enum.ts
│   │       todo.interface.ts
│   │       todo.module.ts
│   │       todo.providers.ts
│   │       todo.repository.ts
│   │       todo.schema.ts
│   │       todo.service.ts

```

## Note

Currently, there's an issue with [serverless-dynamodb-local](https://github.com/99x/serverless-dynamodb-local/issues/294#issuecomment-1462496399), so I fixed temporarily `dynamodb-localhost": "github:99x/dynamodb-localhost#db30898f8c40932c7177be7b2f1a81360d12876d` in package. I will update it later.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
