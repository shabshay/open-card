import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {routesPaths} from '../../app.routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  protected readonly routesPaths = routesPaths;
}
