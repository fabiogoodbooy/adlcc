import { EmailComposer } from '@ionic-native/email-composer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { HomePage } from '../home/home';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  to : string = "attahadicontrecancer@gmail.com";
  cc : string = "attahadicontrecancer@gmail.com";
  subject : string ;
  body : string ;
  num="+21623907587";
  constructor(private callNumber: CallNumber,private emailComposer: EmailComposer,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
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
  callPhone(){
    this.callNumber.callNumber(this.num, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }
  backHome(){
      
  this.navCtrl.setRoot(HomePage)
  }
}
