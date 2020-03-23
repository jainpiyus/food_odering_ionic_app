import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // {
      //   path: 'location-tab',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../location-tab/location-tab.module').then(m => m.LocationTabPageModule)
      //     }
      //   ]
      // },
      {
        path: 'menu-tab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../menu-tab/menu-tab.module').then(m => m.MenuTabPageModule)
          }
        ]
      },
      {
        path: 'cart-tab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../cart-tab/cart-tab.module').then(m => m.CartTabPageModule)
          }
        ]
      },
      {
        path: 'profile-tab',
        children: [
          {
            path: '',
            loadChildren: () => import('../profile-tab/profile-tab.module').then( m => m.ProfileTabPageModule)
          }
        ]        
      },
      {
        path: '',
        redirectTo: '/tabs/menu-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/menu-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
