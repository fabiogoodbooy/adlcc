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
import { ContactPage } from '../pages/contact/contact';
import { FileOpener } from '@ionic-native/file-opener';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FilesPage,
    ContactPage
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
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RubriqueProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,
    FileTransfer,
    DocumentViewer,
    FileOpener,
    EmailComposer
  ]
})
export class AppModule {}
