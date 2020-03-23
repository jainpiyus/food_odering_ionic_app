import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartTabPageRoutingModule } from './cart-tab-routing.module';

import { CartTabPage } from './cart-tab.page';
import { CartListComponent } from './cart-list/cart-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartTabPageRoutingModule
  ],
  declarations: [CartTabPage, CartListComponent]
})
export class CartTabPageModule {}
