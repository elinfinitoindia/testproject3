import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OffercardsComponent } from './offercards/offercards';
import { IonicModule } from 'ionic-angular';
import { FabComponent } from './fab/fab';
import { ListComponent } from './list/list';
import { SliderComponent } from './slider/slider';
import { CardlistComponent } from './cardlist/cardlist';
import { ToolsegmentbtnComponent } from './toolsegmentbtn/toolsegmentbtn';
import { RedeemComponent } from './redeem/redeem';
import { RefresherComponent } from './refresher/refresher';
import { ErrormodalComponent } from './errormodal/errormodal';
import { AdscardComponent } from './adscard/adscard';
@NgModule({
	declarations: [OffercardsComponent,
    FabComponent,
    ListComponent,
    SliderComponent,
    CardlistComponent,
    ToolsegmentbtnComponent,
    RedeemComponent,
    RefresherComponent,
    ErrormodalComponent,
    AdscardComponent],
	imports: [IonicModule],
	exports: [OffercardsComponent,
    FabComponent,
    ListComponent,
    SliderComponent,
    CardlistComponent,
    ToolsegmentbtnComponent,
    RedeemComponent,
    RefresherComponent,
    ErrormodalComponent,
    AdscardComponent],

})
export class ComponentsModule { }
