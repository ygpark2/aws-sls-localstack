# AWS AppConfig Loader, Serverless with Serverless Framework 3, ExpressJS, TypeScript

## How to develop

### Requirements

- Node.js 14+, npm and docker

### Getting started

Run the following command on your local environment:

```
git clone  https://github.com/ygpark2/aws-sls-localstack.git my-project-name
cd my-project-name
```

Then, you can run locally in development mode with live reload using docker:

```
docker compose --env-file .docker/docker.env up --build --remove-orphans
```

The local server is now listening at http://localhost:4000

### Deploy to production

You can deploy to production with the following command:

```
npm run deploy-prod
```

### How to test

#### Creating Application

You can create an application with the following command:

```
make create-application
```

#### Getting Application

You can get the application information with the following command:

```
make get-application appId=<ApplicationId>
```

#### Deleting Application

You need to first modify the `deleteApplication.json` file located under the `./data/test/` folder.
In the file, you need to update the `ApplicationId` field with the application ID you want to delete.

After that, you can delete the application with the following command:

```
make delete-application
```

#### Creating Environment

You can create an application with the following command:

Before to do that, you need to set the fields in the file `createEnvironment.json` under the `./data/test/` folder. In particular, `ApplicationId` field is compulsory one that you must set otherwise you will encounter an error.
```
make create-environment
```

#### Getting Environment

You can get the environment information with the following command:

```
make get-environment appId=<ApplicationId> envId=<EnvironmentId>
```

#### Deleting Environment

You need to first modify the `deleteEnvironment.json` file located under the `./data/test/` folder.
In the file, you need to update the `ApplicationId` and the `EnvironmentId` fields with the environment IDs you want to delete.

After that, you can delete the environment with the following command:

```
make delete-environment
```
