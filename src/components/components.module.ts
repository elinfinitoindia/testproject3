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
import { BrandcardsComponent } from './brandcards/brandcards';
import { CategorycardsComponent } from './categorycards/categorycards';
import { AdsliderComponent } from './adslider/adslider';
import { ImagesliderComponent } from './imageslider/imageslider';
import { SquaredealComponent } from './squaredeal/squaredeal';
import { ShrinkingheaderComponent } from './shrinkingheader/shrinkingheader';
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
    AdscardComponent,
    BrandcardsComponent,
    CategorycardsComponent,
    AdsliderComponent,
    ImagesliderComponent,
    SquaredealComponent,
    ShrinkingheaderComponent],
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
    AdscardComponent,
    BrandcardsComponent,
    CategorycardsComponent,
    AdsliderComponent,
    ImagesliderComponent,
    SquaredealComponent,
    ShrinkingheaderComponent],

})
export class ComponentsModule { }
