import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileTabPage } from './profile-tab.page';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileTabPage
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileTabPageRoutingModule {}
