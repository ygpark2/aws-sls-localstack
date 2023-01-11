import type {
  AppConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from '@aws-sdk/client-appconfig';
import { AppConfigClient } from '@aws-sdk/client-appconfig';
import type { Command as $Command } from '@aws-sdk/smithy-client';
import path from 'path';

import type { Commands } from '@/commands';

import { FileConfigClient } from './FileConfigClient';

export class AppClient {
  private readonly appConfigClient = new AppConfigClient({
    endpoint: 'http://localstack:4566',
    region: 'ap-northeast-2',
    credentials: {
      accessKeyId:
        process.env.AWS_ACCESS_KEY_ID !== undefined
          ? process.env.AWS_ACCESS_KEY_ID
          : '',
      secretAccessKey:
        process.env.AWS_SECRET_ACCESS_KEY !== undefined
          ? process.env.AWS_SECRET_ACCESS_KEY
          : '',
      sessionToken: process.env.AWS_SESSION_TOKEN,
    },
  });

  private readonly fileConfigClient = new FileConfigClient();

  send<IT extends ServiceInputTypes, OT extends ServiceOutputTypes>(
    cmd: Commands.InputCommand<$Command<IT, OT, AppConfigClientResolvedConfig>>
  ): Promise<Commands.InputCommand<OT>> {
    return new Promise<Commands.InputCommand<OT>>((resolve, reject) => {
      const output: Commands.OutputCommand<OT> = {
        code: 200,
        message: 'success!',
        dataCmd: {} as OT,
      };
      this.appConfigClient
        .send(cmd.dataCmd)
        .then((data) => {
          output.dataCmd = data;
          resolve(output);
        })
        .catch((error) => {
          // error handling.
          if (error.name === 'InvalidSignatureException') {
            // Handle InvalidSignatureException
            output.code = 300;
            output.message = 'InvalidSignatureException error!';
          } else if (error.name === 'ResourceNotFoundException') {
            // Handle ResourceNotFoundException
            output.code = 303;
            output.message = 'Resource Not Found error!';
          } else {
            // Handle errors from SDK
            output.code = 310;
            output.message = 'Unknown type error!';
          }

          const rootPath =
            process.env.PROJECT_ROOT_PATH === undefined
              ? __dirname.concat('/../../..')
              : process.env.PROJECT_ROOT_PATH;
          const filePath = path.join(
            rootPath,
            'data',
            'default',
            cmd.defaultJsonFile === undefined ? '' : cmd.defaultJsonFile
          );
          this.fileConfigClient.readFile(filePath).then(
            (data) => {
              output.dataCmd = JSON.parse(data as string) as OT;
              reject(output);
            },
            (fileErr) => {
              // error handling.
              output.code = 303;
              output.message = 'File reading error!';
              reject(output);
            }
          );
        })
        .finally(() => {
          // finally.
          console.log('************* final *************');
        });
    });
  }
}
