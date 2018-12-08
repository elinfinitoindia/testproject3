import { ComponentsModule } from './../components/components.module';
import { NgModule, ErrorHandler, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginProvider } from '../providers/login/login';
import { GooglePlus } from '@ionic-native/google-plus';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { OffersProvider } from '../providers/offers/offers';
import { SharedProvider } from '../providers/shared/shared';
import { AppMinimize } from '@ionic-native/app-minimize';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Clipboard } from '@ionic-native/clipboard';
import { Toast } from '@ionic-native/toast';
import { InterceptorModule } from './interceptor.module';
import {OneSignal} from '@ionic-native/onesignal';
import { NotificationProvider } from '../providers/notification/notification';
// import { OneSignal } from '@ionic-native/onesignal';


@NgModule({
  declarations: [
    MyApp,


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      navExitApp: false
    }),
    ComponentsModule,
    HttpClientModule,
    InterceptorModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,




  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginProvider,
    GooglePlus,
    HttpClientModule,
    OffersProvider,
    SharedProvider,
    AppMinimize,
    SocialSharing,
    Clipboard,
    Toast,
    OneSignal,
    NotificationProvider

  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
