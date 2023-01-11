// import all interfaces
import type {
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
  CreateConfigurationProfileCommandInput,
  CreateConfigurationProfileCommandOutput,
  CreateDeploymentStrategyCommandInput,
  CreateDeploymentStrategyCommandOutput,
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
  DeleteConfigurationProfileCommandInput,
  DeleteConfigurationProfileCommandOutput,
  DeleteDeploymentStrategyCommandInput,
  DeleteDeploymentStrategyCommandOutput,
  DeleteEnvironmentCommandInput,
  DeleteEnvironmentCommandOutput,
  GetApplicationCommandInput,
  GetApplicationCommandOutput,
  GetConfigurationProfileCommandInput,
  GetConfigurationProfileCommandOutput,
  GetDeploymentStrategyCommandInput,
  GetDeploymentStrategyCommandOutput,
  GetEnvironmentCommandInput,
  GetEnvironmentCommandOutput,
} from '@aws-sdk/client-appconfig';
import {
  CreateApplicationCommand,
  CreateConfigurationProfileCommand,
  CreateDeploymentStrategyCommand,
  CreateEnvironmentCommand,
  DeleteApplicationCommand,
  DeleteConfigurationProfileCommand,
  DeleteDeploymentStrategyCommand,
  DeleteEnvironmentCommand,
  GetApplicationCommand,
  GetConfigurationProfileCommand,
  GetDeploymentStrategyCommand,
  GetEnvironmentCommand,
} from '@aws-sdk/client-appconfig';

import type { Commands } from '@/commands';

import { AppClient } from '../../client/AppClient';
import type { IRead } from '../interfaces/IRead';
import type { IWrite } from '../interfaces/IWrite';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["getInputCommand"] }] */
export abstract class BaseRepository implements IWrite, IRead {
  private readonly client = new AppClient();

  // constructor with arguments of AWS AppConfi and File
  constructor(appClient: AppClient) {
    this.client = appClient;
  }

  createApplication(
    inputCommand: CreateApplicationCommandInput
  ): Promise<Commands.OutputCommand<CreateApplicationCommandOutput>> {
    const command = new CreateApplicationCommand(inputCommand);
    return this.client.send(
      this.getInputCommand('createApplication.json', command)
    );
  }

  getApplication(
    inputCommand: GetApplicationCommandInput
  ): Promise<Commands.OutputCommand<GetApplicationCommandOutput>> {
    const command = new GetApplicationCommand(inputCommand);
    return this.client.send(
      this.getInputCommand('getApplication.json', command)
    );
  }

  deleteApplication(
    inputCommand: DeleteApplicationCommandInput
  ): Promise<Commands.OutputCommand<DeleteApplicationCommandOutput>> {
    const command = new DeleteApplicationCommand(inputCommand);
    return this.client.send(
      this.getInputCommand('deleteApplication.json', command)
    );
  }

  createEnvironment(
    inputCommand: CreateEnvironmentCommandInput
  ): Promise<Commands.OutputCommand<CreateEnvironmentCommandOutput>> {
    const command = new CreateEnvironmentCommand(inputCommand);
    return this.client.send(
      this.getInputCommand('createEnvironment.json', command)
    );
  }

  getEnvironment(
    inputCommand: GetEnvironmentCommandInput
  ): Promise<Commands.OutputCommand<GetEnvironmentCommandOutput>> {
    const command = new GetEnvironmentCommand(inputCommand);
    return this.client.send(
      this.getInputCommand('getEnvironment.json', command)
    );
  }

  deleteEnvironment(
    inputCommand: DeleteEnvironmentCommandInput
  ): Promise<Commands.OutputCommand<DeleteEnvironmentCommandOutput>> {
    const command = new DeleteEnvironmentCommand(inputCommand);
    return this.client.send(
      this.getInputCommand('deleteEnvironment.json', command)
    );
  }

  createConfigurationProfile(
    inputCommand: CreateConfigurationProfileCommandInput
  ): Promise<Commands.OutputCommand<CreateConfigurationProfileCommandOutput>> {
    const command = new CreateConfigurationProfileCommand(inputCommand);
    return this.client.send(
      this.getInputCommand('createConfigurationProfile.json', command)
    );
  }

  getConfigurationProfile(
    inputCommand: GetConfigurationProfileCommandInput
  ): Promise<Commands.OutputCommand<GetConfigurationProfileCommandOutput>> {
    const command = new GetConfigurationProfileCommand(inputCommand);
    return this.client.send(
      this.getInputCommand('getConfigurationProfile.json', command)
    );
  }

  deleteConfigurationProfile(
    inputCommand: DeleteConfigurationProfileCommandInput
  ): Promise<Commands.OutputCommand<DeleteConfigurationProfileCommandOutput>> {
    const command = new DeleteConfigurationProfileCommand(inputCommand);
    return this.client.send(
      this.getInputCommand('deleteConfigurationProfile.json', command)
    );
  }

  createDeploymentStrategy(
    inputCommand: CreateDeploymentStrategyCommandInput
  ): Promise<Commands.OutputCommand<CreateDeploymentStrategyCommandOutput>> {
    const command = new CreateDeploymentStrategyCommand(inputCommand);
    return this.client.send(
      this.getInputCommand('createDeploymentStrategy.json', command)
    );
  }

  getDeploymentStrategy(
    inputCommand: GetDeploymentStrategyCommandInput
  ): Promise<Commands.OutputCommand<GetDeploymentStrategyCommandOutput>> {
    const command = new GetDeploymentStrategyCommand(inputCommand);
    return this.client.send(
      this.getInputCommand('getDeploymentStrategy.json', command)
    );
  }

  deleteDeploymentStrategy(
    inputCommand: DeleteDeploymentStrategyCommandInput
  ): Promise<Commands.OutputCommand<DeleteDeploymentStrategyCommandOutput>> {
    const command = new DeleteDeploymentStrategyCommand(inputCommand);
    return this.client.send(
      this.getInputCommand('deleteDeploymentStrategy.json', command)
    );
  }

  getInputCommand<T>(
    defaultJsonFileName: string,
    inputDataCmd: T
  ): Commands.InputCommand<T> {
    const InputCommand: Commands.InputCommand<T> = {
      defaultJsonFile: defaultJsonFileName,
      dataCmd: inputDataCmd,
    };
    return InputCommand;
  }
}
