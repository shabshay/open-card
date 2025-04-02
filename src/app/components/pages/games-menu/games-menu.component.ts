import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {TooltipDirective} from '../../shared/tooltip.directive';
import {routesPaths} from '../../../app.routes';

@Component({
  selector: 'app-games-menu',
  templateUrl: './games-menu.component.html',
  imports: [
    RouterLink,
    TooltipDirective
  ],
  styleUrls: ['./games-menu.component.scss']
})
export class GamesMenuComponent {
  protected readonly routesPaths = routesPaths;
}
