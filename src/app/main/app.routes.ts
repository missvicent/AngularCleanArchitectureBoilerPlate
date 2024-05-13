import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '**',
    redirectTo: 'sample'
  },
  {
    path: '',redirectTo: 'sample', pathMatch: 'full'
  },
  {
    path: 'sample',
    loadComponent: () =>
      import('./../presentation/sample/sample.component').then(
        (m) => m.SampleComponent
      ),
  },
];
