import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path: 'location-tab',
  //   loadChildren: () => import('./location-tab/location-tab.module').then( m => m.LocationTabPageModule)
  // },
  {
    path: 'menu-tab',
    loadChildren: () => import('./menu-tab/menu-tab.module').then( m => m.MenuTabPageModule)
  },
  {
    path: 'cart-tab',
    loadChildren: () => import('./cart-tab/cart-tab.module').then( m => m.CartTabPageModule)
  },
  {
    path: 'profile-tab',
    loadChildren: () => import('./profile-tab/profile-tab.module').then( m => m.ProfileTabPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
