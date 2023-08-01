export interface IAppEnvironment {
  production: boolean;
  apiUrls: {
    rita: string;
    auth: string;
  };
  authConfig: {
    clientId: string;
    domain: string;
    audience: string;
  };
}