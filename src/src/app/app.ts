import { Component, signal, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { firstValueFrom } from 'rxjs'; // Minimal RxJS usage for Observable to Promise conversion

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('invoica');

  private oidcSecurityService = inject(OidcSecurityService);
  private router = inject(Router);

  async ngOnInit(): Promise<void> {
    const { isAuthenticated } = await firstValueFrom(this.oidcSecurityService.checkAuth());

    if (isAuthenticated) {
      this.router.navigate(['/home']);
    }
  }
}
