import { IAppEnvironment } from "./app-environment.interface";
import { EnvironmentType } from "./environment-types";

export class AppEnvironment implements IAppEnvironment {
  production: boolean = false;
  readonly apiUrls = { rita: '', auth: '' };
  readonly authConfig = { clientId: '', domain: '', audience: '' };

  constructor(environmentType: EnvironmentType) {
    this.initialize(environmentType);
  }

  private initialize(environmentType: EnvironmentType): void {
    if (environmentType === EnvironmentType.Production)
      this.initializeProduction();
    else
      this.initializeNonProduction(environmentType);
  }

  private initializeProduction(): void {
    this.production = true;
    this.apiUrls.rita = 'https://rita-api.closing.foc.zone';
    this.apiUrls.auth = 'https://sso.rockfin.com/';
    this.authConfig.audience = 'https://rita-api.closing.foc.zone';
    this.authConfig.domain = 'sso.authrock.com';
    this.authConfig.clientId = 'jUBjpaQ2QK7hoG8b3mlekjsYYByBx6PC';
  }

  private initializeNonProduction(environmentType: EnvironmentType): void {
    this.production = false;
    this.apiUrls.rita = `https://rita-api.${environmentType}.closing.foc.zone`;
    this.apiUrls.auth = `https://sso${environmentType}.closing.foc.zone/`;
    this.authConfig.audience = `https://rita-api.${environmentType}.closing.foc.zone`;
    this.authConfig.domain = `sso${environmentType}.authrock.com`;
    this.authConfig.clientId = 'jUBjpaQ2QK7hoG8b3mlekjsYYByBx6PC';
  }


}
