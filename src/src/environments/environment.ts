export const environment = {
  production: false,
  appBaseUrl: 'http://localhost:4200',
  keycloak: {
    url: '',
    realm: '',
    issuer: '',
    redirectUri: 'http://localhost:4200/',
    clientId: '',
    scope: 'openid profile email',
  },
};
