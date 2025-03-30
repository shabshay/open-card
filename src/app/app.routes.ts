import { Routes } from '@angular/router';
import { GamesMenuComponent } from './games-menu/games-menu.component';
import { TruthOrDareComponent } from './games/truth-or-dare/truth-or-dare.component';
import {DeepQuestionsComponent} from './games/deep-questions/deep-questions.component';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'truth-or-dare', component: TruthOrDareComponent },
  { path: 'deep-questions', component: DeepQuestionsComponent },
  { path: 'games', component: GamesMenuComponent },
];
