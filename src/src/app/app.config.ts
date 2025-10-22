import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth, withAppInitializerAuthCheck } from 'angular-auth-oidc-client';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { routes } from './app.routes';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAuth(
      {
        config: {
          authority: environment.keycloak.issuer,
          redirectUrl: environment.keycloak.redirectUri,
          postLogoutRedirectUri: environment.keycloak.redirectUri,
          clientId: environment.keycloak.clientId,
          scope: environment.keycloak.scope,
          responseType: 'code',
          silentRenew: true,
          useRefreshToken: true,
          renewTimeBeforeTokenExpiresInSeconds: 30,
        },
      },
      withAppInitializerAuthCheck()
    ),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
  ],
};
