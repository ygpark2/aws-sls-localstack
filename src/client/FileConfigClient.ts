import * as fs from 'fs';

export class FileConfigClient {

  constructor() { }

  createFile = (filePath: fs.PathOrFileDescriptor, content: string) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, content, (err) => {
        if(err) {
          reject(err);
        } else {
          resolve(true);
        }
      })
      });
  };

  readFile = (filePath: fs.PathOrFileDescriptor) => {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };

  deleteFile = (filePath: fs.PathLike) => {
    return new Promise((resolve, reject) => {
      fs.unlink(filePath, (err) => {
        if(err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  };

  statFile = (filePath: fs.PathLike) => {
    return new Promise((resolve, reject) => {
      fs.stat(filePath, (err, stats) => {
        if(err) {
          reject(err);
        } else {
          resolve(stats);
        }
      });
    });
  };

}