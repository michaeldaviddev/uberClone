import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'ride',
    loadComponent: () => import('./pages/ride/ride.page').then( m => m.RidePage)
  },
];
