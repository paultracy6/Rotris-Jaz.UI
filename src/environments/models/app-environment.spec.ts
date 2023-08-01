import { AppEnvironment } from "./app-environment";
import { EnvironmentType } from "./environment-types";

describe('AppEnvironment', () => {
  describe('when created', () => {
    it('should initialize non-production environment', () => {
      // Act
      const MyEnvironment = new AppEnvironment(EnvironmentType.Development);

      // Assert
      expect(MyEnvironment.production).toBe(false);
      expect(MyEnvironment.apiUrls.rita).toBe('https://rita-api.dev.closing.foc.zone');
      expect(MyEnvironment.apiUrls.auth).toBe('https://ssodev.closing.foc.zone/');
      expect(MyEnvironment.authConfig.audience).toBe('https://rita-api.dev.closing.foc.zone');
      expect(MyEnvironment.authConfig.domain).toBe('ssodev.authrock.com');
      expect(MyEnvironment.authConfig.clientId).toBe('jUBjpaQ2QK7hoG8b3mlekjsYYByBx6PC');
    });

    it('should initialize production environment', () => {
      // Act
      const MyEnvironment = new AppEnvironment(EnvironmentType.Production);

      // Assert
      expect(MyEnvironment.production).toBe(true);
      expect(MyEnvironment.apiUrls.rita).toBe('https://rita-api.closing.foc.zone');
      expect(MyEnvironment.apiUrls.auth).toBe('https://sso.rockfin.com/');
      expect(MyEnvironment.authConfig.audience).toBe('https://rita-api.closing.foc.zone');
      expect(MyEnvironment.authConfig.domain).toBe('sso.authrock.com');
      expect(MyEnvironment.authConfig.clientId).toBe('jUBjpaQ2QK7hoG8b3mlekjsYYByBx6PC');
    });
  });
});