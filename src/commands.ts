export module Commands {
  export interface InputCommand<T> {
    defaultJsonFile?: string;
    dataCmd: T;
  }

  export interface OutputCommand<T> {
    code?: number;
    message?: string;
    dataCmd: T;
  }
}
