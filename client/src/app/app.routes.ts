import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
          import('./pages/layout/layout.routes').then((m) => m.LAYOUT_ROUTERS),
    },
    {

        path: 'login',
        loadChildren: () => import('../app/pages/login/login.routes').then((m) => m.LOGIN_ROUTERS)
    }
];
