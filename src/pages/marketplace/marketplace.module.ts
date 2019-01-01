import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarketplacePage } from './marketplace';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MarketplacePage,
  ],
  imports: [
    IonicPageModule.forChild(MarketplacePage),
    ComponentsModule
  ],
})
export class MarketplacePageModule {}
