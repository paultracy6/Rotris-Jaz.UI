import { AppEnvironment } from "./models/app-environment";
import { IAppEnvironment } from "./models/app-environment.interface";
import { EnvironmentType } from "./models/environment-types";

const APP_ENVIRONMENT = new AppEnvironment(EnvironmentType.Beta);

export const environment: IAppEnvironment = {
  production: APP_ENVIRONMENT.production,
  apiUrls: APP_ENVIRONMENT.apiUrls,
  authConfig: APP_ENVIRONMENT.authConfig
};
