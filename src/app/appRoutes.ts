import { ListComponent } from './components/list/list.component';
import { ProfileComponent } from './components/profile/profile.component';

import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },

  {
    path: 'profile/:username',
    component: ProfileComponent
  },

  { path: '**', 
    redirectTo: 'list' 
}
];

