import { Injectable, Signal, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { OidcSecurityService, UserDataResult, AuthenticatedResult, LoginResponse } from 'angular-auth-oidc-client';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private oidcSecurityService = inject(OidcSecurityService);
  private router = inject(Router);

  private _authCheckPromise: Promise<LoginResponse>;

  private authResult: Signal<AuthenticatedResult | undefined> =
    toSignal(this.oidcSecurityService.isAuthenticated$, { initialValue: { isAuthenticated: false } as AuthenticatedResult });

  public isAuthenticated: Signal<boolean> =
    computed(() => this.authResult()?.isAuthenticated ?? false);

  public userProfile: Signal<UserDataResult | null> =
    toSignal(this.oidcSecurityService.userData$, { initialValue: null });

  constructor() {
    this._authCheckPromise = firstValueFrom(this.oidcSecurityService.checkAuth());
  }

  public login(): void {
    this.oidcSecurityService.authorize();
  }

  public logout(): void {
    this.oidcSecurityService.logoffAndRevokeTokens().subscribe({
      complete: () => this.router.navigateByUrl('/'),
    });
  }

  public manageAccount(): void {
    window.location.href = `${environment.keycloak.issuer}/account`;
  }

  // Public method for guards to await the initial authentication check
  public getAuthCheckPromise(): Promise<LoginResponse> {
    return this._authCheckPromise;
  }
}