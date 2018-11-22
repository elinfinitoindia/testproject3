import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfferdetailPage } from './offerdetail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    OfferdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(OfferdetailPage),
    ComponentsModule
  ],
})
export class OfferdetailPageModule {}
