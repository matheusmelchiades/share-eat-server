# share-eat-server

Application server | Node.js | Hapi.js | Sequelize

## Prerequisites

-   [NodeJS](https://nodejs.org/en/) 12.x
-   [Yarn](https://yarnpkg.com/lang/en/) 1.x
-   [Hapi](https://hapi.dev/) 18.x
-   [Jest](https://jestjs.io/) 24.x
-   [Sequelize](https://sequelize.org/master/) 5.x


## Initialization
To get started the application server execute the commands below in the project.

**YARN**

To init application, you have to exec this pass to install all dependencies.
```bash
yarn
```

**SEQUELIZE**

To execution with sequelize, you have to init migrations and seeders
``` bash 
yarn run sequelize db:migrate
yarn run sequelize db:seed:all
```

**CONFIG ENV**

To config the environment, you have to rename the file with name "env_sample" to ".env" and rename the variable as you need.


**START SERVER**

To execution with yarn don't forget of config the environment, NODE_ENV = development | homologation | production | test. (default: development)
``` bash
yarn start 
```


## Architecture

-   **\_\_tests\_\_** => Module of application responsible for all test types.
    -   **coverage** => Report of tests.
    -   **integration** => Definition of integration testing scenarios.
    -   **unit** => Definition of unit testing scenarios.
    -   **factory** => Definition of data model fakes to used in tests.
-   **app** => Module of application where applies bussines logic, authentication, and services.
-   **api** => Definition of components in yours respective routes, handlers and controllers.
-   **assets** => Module of application save medias, documents and statics files.
-   **config** => Module of application to set configurations to plugins, routes, service, database and authentication.
-   **database** => Modulo responsavel para gerenciamento do banco de dados.
    -   **data** => Defintion of data to init application.
    -   **migrations** => Definition of DDL Database and validations in level database.
    -   **seeders** => Database's versioning definition.
    -   **fieldMap** => Definition of table and columns to map in database.
-   **engine** => Module respective by configuration and launch All application.
    -   **database** => Definition of launcher database connections.
        -   **handlers** => Responsible file by configurations handler of database, ex: sequelize.
    -   **plugins** => Definition of plugins to register on server.
        -   **routes** => Responsible of load all routes of applicaton.
    -   Launch application.
    -   Launch Logger.
-   **ecosystem.config** => Responsible file by deploy's configurations.
-   **server** => boot file.

## Components

Api's Architecture is divided in components, faciliting the maintenance of services.

Your struct is composed by:

-   **component**
    -   **handler** => Layout's definition(body, payload) of input and output in route.
    -   **model** => Model definition to database access.
    -   **routes** => Route definition is gateway to validate params of avaible input to routes.
    -   **schema** => Layout's definition data Object to model access database.
