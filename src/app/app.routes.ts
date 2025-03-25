import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TruthOrDareComponent } from './games/truth-or-dare/truth-or-dare.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'truth-or-dare', component: TruthOrDareComponent },
];
