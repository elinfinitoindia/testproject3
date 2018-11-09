import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoresPage } from './stores';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    StoresPage,
  ],
  imports: [
    IonicPageModule.forChild(StoresPage),
    ComponentsModule
  ],
})
export class StoresPageModule {}
