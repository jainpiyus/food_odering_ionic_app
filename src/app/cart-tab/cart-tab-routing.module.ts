import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartTabPage } from './cart-tab.page';

const routes: Routes = [
  {
    path: '',
    component: CartTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartTabPageRoutingModule {}
