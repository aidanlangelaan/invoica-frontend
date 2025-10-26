import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-welcome-layout',
  templateUrl: './welcome-layout.component.html',
  styleUrls: ['./welcome-layout.component.scss'],
  standalone: true,
  imports: [RouterOutlet]
})
export class WelcomeLayoutComponent {}
