import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OffercardsComponent } from './offercards/offercards';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [OffercardsComponent],
	imports: [IonicModule],
	exports: [OffercardsComponent],

})
export class ComponentsModule { }
