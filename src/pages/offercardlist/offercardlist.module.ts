import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OffercardlistPage } from './offercardlist';

@NgModule({
  declarations: [
    OffercardlistPage,
  ],
  imports: [
    IonicPageModule.forChild(OffercardlistPage),
    ComponentsModule
  ],
})
export class OffercardlistPageModule { }
