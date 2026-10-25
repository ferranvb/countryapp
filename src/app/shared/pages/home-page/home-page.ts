import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppFooterComponent } from '../../components/app-footer/app-footer';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, AppFooterComponent],
  templateUrl: './home-page.html',
})
export class HomePageComponent {}
