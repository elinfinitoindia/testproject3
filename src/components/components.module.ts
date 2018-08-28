import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OffercardsComponent } from './offercards/offercards';
import { IonicModule } from 'ionic-angular';
import { FabComponent } from './fab/fab';
import { ListComponent } from './list/list';
import { SliderComponent } from './slider/slider';
import { CardlistComponent } from './cardlist/cardlist';
import { ToolsegmentbtnComponent } from './toolsegmentbtn/toolsegmentbtn';
import { RedeemComponent } from './redeem/redeem';
@NgModule({
	declarations: [OffercardsComponent,
    FabComponent,
    ListComponent,
    SliderComponent,
    CardlistComponent,
    ToolsegmentbtnComponent,
    RedeemComponent],
	imports: [IonicModule],
	exports: [OffercardsComponent,
    FabComponent,
    ListComponent,
    SliderComponent,
    CardlistComponent,
    ToolsegmentbtnComponent,
    RedeemComponent],

})
export class ComponentsModule { }
