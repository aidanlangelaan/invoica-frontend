import { PassedInitialConfig } from 'angular-auth-oidc-client';
import { environment } from '../environments/environment';

export const authConfig: PassedInitialConfig = {
  config: {
    authority: environment.keycloak.issuer,
    redirectUrl: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
    clientId: environment.keycloak.clientId,
    scope: environment.keycloak.scope,
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    renewTimeBeforeTokenExpiresInSeconds: 30,
  },
}
