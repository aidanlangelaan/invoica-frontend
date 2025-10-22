import { Injectable, Signal, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { OidcSecurityService, UserDataResult, AuthenticatedResult } from 'angular-auth-oidc-client';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private oidcSecurityService = inject(OidcSecurityService);

  private authResult: Signal<AuthenticatedResult | undefined> = toSignal(this.oidcSecurityService.isAuthenticated$);
  public isAuthenticated: Signal<boolean> = computed(() => this.authResult()?.isAuthenticated ?? false);
  public userProfile: Signal<UserDataResult | null> = toSignal(this.oidcSecurityService.userData$, { initialValue: null });

  public login(): void {
    this.oidcSecurityService.authorize();
  }

  public logout(): void {
    this.oidcSecurityService.logoffAndRevokeTokens().subscribe();
  }

  public manageAccount(): void {
    window.location.href = `${environment.keycloak.issuer}/account`;
  }
}
