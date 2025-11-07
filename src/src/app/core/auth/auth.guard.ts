import { inject } from '@angular/core';
import { CanMatchFn, Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanMatchFn = async (
  _route,
  segments
): Promise<boolean | UrlTree> => {
  const router = inject(Router);
  const authService = inject(AuthService);

  await authService.getAuthCheckPromise();
  const isAuthenticated = authService.isAuthenticated();

  const isRootPath = segments.length === 0;

  if (isRootPath) {
    if (isAuthenticated) {
      return router.parseUrl('/home');
    } else {
      return true;
    }
  } else {
    if (isAuthenticated) {
      return true;
    } else {
      const attempted = '/' + segments.map(s => s.path).join('/');
      sessionStorage.setItem('returnUrl', attempted);
      return router.parseUrl('/');
    }
  }
};
