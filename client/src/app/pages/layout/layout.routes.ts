import { LayoutComponent } from './layout.component';
import { Routes } from '@angular/router';

export const LAYOUT_ROUTERS: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',
        },
        {
            path: 'home',
            loadChildren: () =>
              import('../layout/home/home.routes').then((m) => m.HOME_ROUTERS),
        }
    ]
  },
];