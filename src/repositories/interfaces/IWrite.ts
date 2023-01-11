import { Commands } from "@/commands";
import { 
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,

  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,

  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput,

  DeleteEnvironmentCommandInput,
  DeleteEnvironmentCommandOutput,

  CreateConfigurationProfileCommandInput,
  CreateConfigurationProfileCommandOutput,

  DeleteConfigurationProfileCommandInput,
  DeleteConfigurationProfileCommandOutput,

  CreateDeploymentStrategyCommandInput,
  CreateDeploymentStrategyCommandOutput,

  DeleteDeploymentStrategyCommandInput,
  DeleteDeploymentStrategyCommandOutput,
} from "@aws-sdk/client-appconfig";

export interface IWrite {

  createApplication(inputCommand: CreateApplicationCommandInput): Promise<Commands.OutputCommand<CreateApplicationCommandOutput>>;

  deleteApplication(inputCommand: DeleteApplicationCommandInput): Promise<Commands.OutputCommand<DeleteApplicationCommandOutput>>;
  
  createEnvironment(inputCommand: CreateEnvironmentCommandInput): Promise<Commands.OutputCommand<CreateEnvironmentCommandOutput>>;

  deleteEnvironment(inputCommand: DeleteEnvironmentCommandInput): Promise<Commands.OutputCommand<DeleteEnvironmentCommandOutput>>;

  createConfigurationProfile(inputCommand: CreateConfigurationProfileCommandInput): Promise<Commands.OutputCommand<CreateConfigurationProfileCommandOutput>>;

  deleteConfigurationProfile(inputCommand: DeleteConfigurationProfileCommandInput): Promise<Commands.OutputCommand<DeleteConfigurationProfileCommandOutput>>;

  createDeploymentStrategy(inputCommand: CreateDeploymentStrategyCommandInput): Promise<Commands.OutputCommand<CreateDeploymentStrategyCommandOutput>>;

  deleteDeploymentStrategy(inputCommand: DeleteDeploymentStrategyCommandInput): Promise<Commands.OutputCommand<DeleteDeploymentStrategyCommandOutput>>;

}