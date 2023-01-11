import type {
  GetApplicationCommandInput,
  GetApplicationCommandOutput,
  GetConfigurationProfileCommandInput,
  GetConfigurationProfileCommandOutput,
  GetDeploymentStrategyCommandInput,
  GetDeploymentStrategyCommandOutput,
  GetEnvironmentCommandInput,
  GetEnvironmentCommandOutput,
} from '@aws-sdk/client-appconfig';

import type { Commands } from '@/commands';

export interface IRead {
  getApplication(
    inputCommand: GetApplicationCommandInput
  ): Promise<Commands.OutputCommand<GetApplicationCommandOutput>>;

  getEnvironment(
    inputCommand: GetEnvironmentCommandInput
  ): Promise<Commands.OutputCommand<GetEnvironmentCommandOutput>>;

  getConfigurationProfile(
    inputCommand: GetConfigurationProfileCommandInput
  ): Promise<Commands.OutputCommand<GetConfigurationProfileCommandOutput>>;

  getDeploymentStrategy(
    inputCommand: GetDeploymentStrategyCommandInput
  ): Promise<Commands.OutputCommand<GetDeploymentStrategyCommandOutput>>;
}
