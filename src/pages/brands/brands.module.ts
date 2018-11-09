import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrandsPage } from './brands';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    BrandsPage,
  ],
  imports: [
    IonicPageModule.forChild(BrandsPage),
    ComponentsModule
  ],
})
export class BrandsPageModule {}
