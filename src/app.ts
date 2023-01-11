import 'express-async-errors';

import type {
  CreateApplicationCommandInput,
  CreateEnvironmentCommandInput,
  DeleteApplicationCommandInput,
  DeleteEnvironmentCommandInput,
  GetApplicationCommandInput,
  GetEnvironmentCommandInput,
} from '@aws-sdk/client-appconfig';
import express, { json } from 'express';
import helmet from 'helmet';

import { AppClient } from './client/AppClient';
import { AppConfigRepository } from './repositories/AppConfigDataRepository';
import { setupSwagger } from './swagger';

const appClient = new AppClient();
const baseRepository = new AppConfigRepository(appClient);

const app = express();

setupSwagger(app);

app.use(json());
app.use(helmet());

app.get('/', (_, res) => {
  res.json({
    msg: 'Hello World',
  });
});

app.post('/application', (req, res) => {
  const appConfigData = JSON.parse(
    String.fromCharCode(...(req.body !== undefined ? req.body : []))
  );
  const input = appConfigData as CreateApplicationCommandInput; // Name: string | undefined;, Description?: string;
  baseRepository
    .createApplication(input)
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

app.delete('/application', (req, res) => {
  const appConfigData = JSON.parse(
    String.fromCharCode(...(req.body !== undefined ? req.body : []))
  );
  const input = appConfigData as DeleteApplicationCommandInput; // Name: string | undefined;, Description?: string;
  baseRepository
    .deleteApplication(input)
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

app.get('/config/:appId', (req, res) => {
  /*
  const input: GetHostedConfigurationVersionCommandInput = {
    ApplicationId: process.env.APPCONFIG_APP,
    ConfigurationProfileId: process.env.APPCONFIG_CONFIG,
    VersionNumber: parseInt((process.env.APPCONFIG_HOSTED !== undefined) ? process.env.APPCONFIG_HOSTED : '')
  }
  */

  const input: GetApplicationCommandInput = {
    ApplicationId: req.params.appId,
  };
  baseRepository
    .getApplication(input)
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

app.post('/environment', (req, res) => {
  const appConfigData = JSON.parse(
    String.fromCharCode(...(req.body !== undefined ? req.body : []))
  );
  const input = appConfigData as CreateEnvironmentCommandInput;
  baseRepository
    .createEnvironment(input)
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

app.delete('/environment', (req, res) => {
  const appConfigData = JSON.parse(
    String.fromCharCode(...(req.body !== undefined ? req.body : []))
  );
  const input = appConfigData as DeleteEnvironmentCommandInput;
  baseRepository
    .deleteEnvironment(input)
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

app.get('/config/:appId/:envId', (req, res) => {
  const input: GetEnvironmentCommandInput = {
    ApplicationId: req.params.appId,
    EnvironmentId: req.params.envId,
  };
  baseRepository
    .getEnvironment(input)
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

app.use((_, res, _2) => {
  res.status(404).json({ error: 'NOT FOUND' });
});

export { app };
