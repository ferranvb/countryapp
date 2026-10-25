import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFooterComponent } from './shared/components/app-footer/app-footer';

@Component({
  imports: [RouterOutlet, AppFooterComponent],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {}
