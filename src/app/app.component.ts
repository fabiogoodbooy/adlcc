import { ContactPage } from './../pages/contact/contact';
import { FilesPage } from './../pages/files/files';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RubriqueProvider } from '../services/rubrique';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  list:any;
  pages: Array<{title: string, component: any}>;
  to : string = "nouhabenhloua1204@gmail.com";
  cc : string = "nouhabenhloua1204@gmail.com";
  subject : string ;
  body : string ;
  constructor(private emailComposer: EmailComposer,
    service : RubriqueProvider,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    service.allrubrique().subscribe((data :any)=>
    {
      this.list = data;
      console.log(this.list);
    } )
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(rubrique) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(FilesPage,{
      id : rubrique.id
    });
  }
  sendEmail(){
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        
      }
     });
     
     let email = {
       to: this.to,
       cc: this.cc,
       attachments: [
       ],
       subject: this.subject,
       body: this.body,
       isHtml: true
     }
     
     // Send a text message using default options
     this.emailComposer.open(email);
  }

}
