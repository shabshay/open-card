import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TruthOrDareComponent } from './games/truth-or-dare/truth-or-dare.component';
import {DeepQuestionsComponent} from './games/deep-questions/deep-questions.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'truth-or-dare', component: TruthOrDareComponent },
  { path: 'deep-questions', component: DeepQuestionsComponent },
];
