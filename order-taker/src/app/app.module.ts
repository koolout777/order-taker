import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {billPage} from '../pages/bill/bill';
import {menuPage} from '../pages/menu/menu';
import {icePage} from '../pages/ice/ice';
import {onesetPage} from '../pages/one-set/one-set';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    billPage,
    menuPage,
    onesetPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    billPage,
    menuPage,
    onesetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
