import { Commands } from "@/commands";
import {
  GetApplicationCommandInput,
  GetApplicationCommandOutput,

  GetEnvironmentCommandInput,
  GetEnvironmentCommandOutput,

  GetConfigurationProfileCommandInput,
  GetConfigurationProfileCommandOutput,

  GetDeploymentStrategyCommandInput,
  GetDeploymentStrategyCommandOutput,
} from "@aws-sdk/client-appconfig";

export interface IRead {

  getApplication(inputCommand: GetApplicationCommandInput): Promise<Commands.OutputCommand<GetApplicationCommandOutput>>;

  getEnvironment(inputCommand: GetEnvironmentCommandInput): Promise<Commands.OutputCommand<GetEnvironmentCommandOutput>>;

  getConfigurationProfile(inputCommand: GetConfigurationProfileCommandInput): Promise<Commands.OutputCommand<GetConfigurationProfileCommandOutput>>;

  getDeploymentStrategy(inputCommand: GetDeploymentStrategyCommandInput): Promise<Commands.OutputCommand<GetDeploymentStrategyCommandOutput>>;

}
