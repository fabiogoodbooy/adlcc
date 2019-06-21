import { FilesPage } from './../pages/files/files';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RubriqueProvider } from '../services/rubrique';
import { HttpClientModule } from '@angular/common/http';

import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { EmailComposer } from '@ionic-native/email-composer';
import { FileOpener } from '@ionic-native/file-opener';
import { Network } from '@ionic-native/network';
import { FilesProvider } from '../services/files';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FilesPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FilesPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RubriqueProvider,
    FilesProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,
    FileTransfer,
    DocumentViewer,
    FileOpener,
    EmailComposer,
    Network
  ]
})
export class AppModule {}