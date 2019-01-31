import { Routes } from '@angular/router';

import { UserComponent } from './user.component';

export const UserPageRoutes: Routes = [
    {

        path: '',
        children: [ {
          path: '',
          component: UserComponent
      }]

}
];
