import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationTabPageRoutingModule } from './location-tab-routing.module';

import { LocationTabPage } from './location-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationTabPageRoutingModule
  ],
  declarations: [LocationTabPage]
})
export class LocationTabPageModule {}
