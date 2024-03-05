import { LayoutComponent } from './layout.component';

import { Routes } from '@angular/router';

export const LAYOUT_ROUTES: Routes = [
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
        },
        {
            path: 'booking',
            loadChildren: () =>
                import('./booking/booking.routes').then((m) => m.BOOKING_ROUTERS),
        },
        {
          path: 'menu',
          loadChildren: () =>
            import('./menu/menu.routes').then((m) => m.MENU_ROUTERS),
        },
        {
          path: 'order',
          loadChildren: () =>
            import('./order/order.routes').then((m) => m.ORDER_ROUTERS),
        },
        {
          path: 'location',
          loadChildren: () =>
            import('./location/location.routes').then((m) => m.LOCATION_ROUTES),
        }
        
    ]
  },
];