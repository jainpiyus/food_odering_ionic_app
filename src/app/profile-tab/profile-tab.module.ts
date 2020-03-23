import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileTabPageRoutingModule } from './profile-tab-routing.module';

import { ProfileTabPage } from './profile-tab.page';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OrdersHistoryComponent } from './orders-history/orders-history.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SavedAddressComponent } from './saved-address/saved-address.component';
import { ThemeComponent } from './theme/theme.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileTabPageRoutingModule
  ],
  declarations: [
    ProfileTabPage,
    LoginComponent, SignupComponent,
    OrdersHistoryComponent,
    MyProfileComponent,
    SavedAddressComponent
  ]
})
export class ProfileTabPageModule { }
