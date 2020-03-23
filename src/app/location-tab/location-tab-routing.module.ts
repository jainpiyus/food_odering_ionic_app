import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationTabPage } from './location-tab.page';

const routes: Routes = [
  {
    path: '',
    component: LocationTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationTabPageRoutingModule {}
