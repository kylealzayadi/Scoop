import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/progress/contact';
import { HomePage } from '../pages/home/home';

import { Camera } from '@ionic-native/camera';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignInPage } from '../pages/sign-in/sign-in';
import { GoogleMaps } from "@ionic-native/google-maps";
import { Geolocation } from '@ionic-native/geolocation';
import { NgxQRCodeModule} from 'ngx-qrcode2';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    SignInPage,
    ProgressBarComponent,
    LoginPage,
    TabsPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    SignInPage,
   TabsPage,
   LoginPage,
    
  ],
  providers: [
    GoogleMaps,
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
