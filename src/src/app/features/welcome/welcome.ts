import { Component, effect, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.scss'
})
export class WelcomeComponent {
  private authService = inject(AuthService);

  public login(): void {
    this.authService.login();
  }
}
