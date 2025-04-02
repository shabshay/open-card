import { Routes } from '@angular/router';
import { GamesMenuComponent } from './components/pages/games-menu/games-menu.component';
import { TruthOrDareComponent } from './components/games/truth-or-dare/truth-or-dare.component';
import {DeepQuestionsComponent} from './components/games/deep-questions/deep-questions.component';
import {LandingPageComponent} from './components/pages/landing-page/landing-page.component';
import {MusicComponent} from './components/pages/music/music.component';
import {NotesGameComponent} from './components/games/notes-game/notes-game.component';

const gamesRoute = 'games'

export const routesPaths = {
  home: '',
  games: 'games',
  truthOrDare: `${gamesRoute}/truth-or-dare`,
  deepQuestions: `${gamesRoute}/deep-questions`,
  notesGame: `${gamesRoute}/notes-game`,
  music: 'music'
}

export const routes: Routes = [
  { path: routesPaths.home, component: LandingPageComponent },
  { path: routesPaths.music, component: MusicComponent },
  { path: routesPaths.games, component: GamesMenuComponent },
  { path: routesPaths.truthOrDare, component: TruthOrDareComponent },
  { path: routesPaths.deepQuestions, component: DeepQuestionsComponent },
  { path: routesPaths.notesGame, component: NotesGameComponent },
];


