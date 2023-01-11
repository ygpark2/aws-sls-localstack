// import all interfaces
import { IWrite } from '../interfaces/IWrite';
import { IRead } from '../interfaces/IRead';

import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,

  GetApplicationCommand,
  GetApplicationCommandInput,
  GetApplicationCommandOutput,

  DeleteApplicationCommand,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,

  CreateEnvironmentCommand,
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput,

  GetEnvironmentCommand,
  GetEnvironmentCommandInput,
  GetEnvironmentCommandOutput,

  DeleteEnvironmentCommand,
  DeleteEnvironmentCommandInput,
  DeleteEnvironmentCommandOutput,

  CreateConfigurationProfileCommand,
  CreateConfigurationProfileCommandInput,
  CreateConfigurationProfileCommandOutput,

  GetConfigurationProfileCommand,
  GetConfigurationProfileCommandInput,
  GetConfigurationProfileCommandOutput,

  DeleteConfigurationProfileCommand,
  DeleteConfigurationProfileCommandInput,
  DeleteConfigurationProfileCommandOutput,

  CreateDeploymentStrategyCommand,
  CreateDeploymentStrategyCommandInput,
  CreateDeploymentStrategyCommandOutput,

  GetDeploymentStrategyCommand,
  GetDeploymentStrategyCommandInput,
  GetDeploymentStrategyCommandOutput,

  DeleteDeploymentStrategyCommand,
  DeleteDeploymentStrategyCommandInput,
  DeleteDeploymentStrategyCommandOutput
} from "@aws-sdk/client-appconfig";

import { AppClient } from '../../client/AppClient';
import { Commands } from '@/commands';


export abstract class BaseRepository implements IWrite, IRead {

  private readonly _client = new AppClient();

  // constructor with arguments of AWS AppConfi and File
  constructor(appClient: AppClient) {
    this._client = appClient;
  }

  createApplication(inputCommand: CreateApplicationCommandInput): Promise<Commands.OutputCommand<CreateApplicationCommandOutput>> {
    const command = new CreateApplicationCommand(inputCommand);
    return this._client.send( this.getInputCommand("createApplication.json", command) );
  }

  getApplication(inputCommand: GetApplicationCommandInput): Promise<Commands.OutputCommand<GetApplicationCommandOutput>> {
    const command = new GetApplicationCommand(inputCommand);
    return this._client.send( this.getInputCommand("getApplication.json", command) );
  }

  deleteApplication(inputCommand: DeleteApplicationCommandInput): Promise<Commands.OutputCommand<DeleteApplicationCommandOutput>> {
    const command = new DeleteApplicationCommand(inputCommand);
    return this._client.send( this.getInputCommand("deleteApplication.json", command) );
  }

  createEnvironment(inputCommand: CreateEnvironmentCommandInput): Promise<Commands.OutputCommand<CreateEnvironmentCommandOutput>> {
    const command = new CreateEnvironmentCommand(inputCommand);
    return this._client.send( this.getInputCommand("createEnvironment.json", command) );
  }

  getEnvironment(inputCommand: GetEnvironmentCommandInput): Promise<Commands.OutputCommand<GetEnvironmentCommandOutput>> {
    const command = new GetEnvironmentCommand(inputCommand);
    return this._client.send( this.getInputCommand("getEnvironment.json", command) );
  }

  deleteEnvironment(inputCommand: DeleteEnvironmentCommandInput): Promise<Commands.OutputCommand<DeleteEnvironmentCommandOutput>> {
    const command = new DeleteEnvironmentCommand(inputCommand);
    return this._client.send( this.getInputCommand("deleteEnvironment.json", command) );
  }

  createConfigurationProfile(inputCommand: CreateConfigurationProfileCommandInput): Promise<Commands.OutputCommand<CreateConfigurationProfileCommandOutput>> {
    const command = new CreateConfigurationProfileCommand(inputCommand);
    return this._client.send( this.getInputCommand("createConfigurationProfile.json", command) );
  }

  getConfigurationProfile(inputCommand: GetConfigurationProfileCommandInput): Promise<Commands.OutputCommand<GetConfigurationProfileCommandOutput>> {
    const command = new GetConfigurationProfileCommand(inputCommand);
    return this._client.send( this.getInputCommand("getConfigurationProfile.json", command) );
  }
  
  deleteConfigurationProfile(inputCommand: DeleteConfigurationProfileCommandInput): Promise<Commands.OutputCommand<DeleteConfigurationProfileCommandOutput>> {
    const command = new DeleteConfigurationProfileCommand(inputCommand);
    return this._client.send( this.getInputCommand("deleteConfigurationProfile.json", command) );
  }

  createDeploymentStrategy(inputCommand: CreateDeploymentStrategyCommandInput): Promise<Commands.OutputCommand<CreateDeploymentStrategyCommandOutput>> {
    const command = new CreateDeploymentStrategyCommand(inputCommand);
    return this._client.send( this.getInputCommand("createDeploymentStrategy.json", command) );
  }

  getDeploymentStrategy(inputCommand: GetDeploymentStrategyCommandInput): Promise<Commands.OutputCommand<GetDeploymentStrategyCommandOutput>> {
    const command = new GetDeploymentStrategyCommand(inputCommand);
    return this._client.send( this.getInputCommand("getDeploymentStrategy.json", command) );
  }

  deleteDeploymentStrategy(inputCommand: DeleteDeploymentStrategyCommandInput): Promise<Commands.OutputCommand<DeleteDeploymentStrategyCommandOutput>> {
    const command = new DeleteDeploymentStrategyCommand(inputCommand);
    return this._client.send( this.getInputCommand("deleteDeploymentStrategy.json", command) );
  }

  getInputCommand<T>(defaultJsonFileName: string, inputDataCmd: T): Commands.InputCommand<T> {
    const InputCommand: Commands.InputCommand<T> = {
      defaultJsonFile: defaultJsonFileName,
      dataCmd: inputDataCmd
    };
    return InputCommand;
  }
}