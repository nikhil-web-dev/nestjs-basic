<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

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

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
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

## Some common commands

```bash
# Create new project
$ nest new <name>

# Generate a new module
$ nest generate module <name>

# Generate a new controller, [--flat Do not generate a folder for the element].
$ nest generate controller <name> --flat

## Further reading
https://docs.nestjs.com/cli/usages
```

## Parts of Nest

- Controller - Handles incoming requests
- Services - Handles data access and business logics
- Modules - Groups together code
- Pipes - Validates incoming data
- Filters - Handles error that occur during request handling
- Guards -  Handles authentication
- Interceptors - Adds extra logic to incoming requests or outgoing responses
- Repositories - Handles data stored in a DB

## Setting up automatic validation

- Use global validation pipe [in main.ts]
- Create DTO, a class that tells the different properties of the request body
- Add validation rules to the class [npm class-validator]
- Apply the class to the request handler

## Services and Repositories

Services and Repositories both are classes, however services are the best place to keep the business logics and repositories are the best place to keep storage related logics.

## Inversion of control principle

- It states classes should not create instances of its dependencies on its own. It. is a design principle that allows classes to be loosely coupled and, therefore, easier to test and maintain.

### DI fundamentals

- Dependency injection is an inversion of control technique wherein you delegate instantiation of dependencies to the IoC container, instead of doing it in your own code imperatively.

### DI Container Flow
> Use the injectable decorator on each class and add them to the modules list of provider
 - At startup, register all classes with the container.
 - Container will figure out what each dependencies and each class has.
> Nest will try to create controller instances 
 - Then container creates an instance of a class.
 - Container builds all the dependencies and provide us the instance.
 - Container will reuse the dependencies if needed.

Further reading - [https://www.educative.io/edpresso/what-is-inversion-of-control](https://www.educative.io/edpresso/what-is-inversion-of-control)


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
