import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerifyotpPage } from './verifyotp';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    VerifyotpPage,
    
  ],
  imports: [
    IonicPageModule.forChild(VerifyotpPage),
    ComponentsModule
  ],
})
export class VerifyotpPageModule {}
