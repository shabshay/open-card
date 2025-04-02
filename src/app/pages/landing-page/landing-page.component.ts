import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {routesPaths} from '../../app.routes';

@Component({
  selector: 'app-landing-page',
  imports: [
    RouterLink
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  protected readonly routesPaths = routesPaths;
}
