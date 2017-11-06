import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http'
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { APIPage } from '../pages/api/api';
import { QrPage } from '../pages/qr/qr';
import { TabsPage } from '../pages/tabs/tabs';
import { MessageServiceProvider } from '../providers/message-service/message-service';

import { Camera } from '@ionic-native/camera';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    APIPage,
    TabsPage,
    QrPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    APIPage,
    TabsPage,
    QrPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MessageServiceProvider,
    Camera,
    BarcodeScanner,
    InAppBrowser
  ]
})
export class AppModule {}
