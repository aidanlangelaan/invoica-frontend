import { Component, Signal, inject } from '@angular/core';
import { JsonPipe, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../../core/auth/auth.service';
import { UserDataResult } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JsonPipe, NgIf, MatButtonModule, MatCardModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  private authService = inject(AuthService);

  public profile: Signal<UserDataResult | null> = this.authService.userProfile;

  public logout(): void {
    this.authService.logout();
  }

  public manageAccount(): void {
    this.authService.manageAccount();
  }
}
