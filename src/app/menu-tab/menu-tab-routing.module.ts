import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuTabPage } from './menu-tab.page';

const routes: Routes = [
  {
    path: '',
    component: MenuTabPage
  },
  {
    path: 'view-product',
    loadChildren: () => import('./view-product/view-product.module').then( m => m.ViewProductPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuTabPageRoutingModule {}
