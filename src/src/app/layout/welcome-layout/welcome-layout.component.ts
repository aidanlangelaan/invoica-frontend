import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-welcome-layout',
  templateUrl: './welcome-layout.component.html',
  styleUrls: ['./welcome-layout.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSlideToggleModule,
    MatIconModule
  ]
})
export class WelcomeLayoutComponent {
  public themeService = inject(ThemeService);

  public get isDarkTheme() {
    return this.themeService.isDarkTheme();
  }

  public toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
