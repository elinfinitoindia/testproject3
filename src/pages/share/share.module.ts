import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharePage } from './share';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SharePage,
  ],
  imports: [
    IonicPageModule.forChild(SharePage),
    ComponentsModule
  ],
})
export class SharePageModule {}
