import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {TooltipDirective} from '../shared/tooltip.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    RouterLink,
    TooltipDirective
  ],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
