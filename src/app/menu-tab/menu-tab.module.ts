import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuTabPageRoutingModule } from './menu-tab-routing.module';

import { MenuTabPage } from './menu-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuTabPageRoutingModule
  ],
  declarations: [MenuTabPage]
})
export class MenuTabPageModule {}
