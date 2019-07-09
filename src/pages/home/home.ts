import { ContactPage } from './../contact/contact';
import { DocumentsPage } from './../documents/documents';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { GalleriePage } from '../gallerie/gallerie';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



 
  constructor(public toastController: ToastController,
    private network: Network,
    public navCtrl: NavController) {
  
    let disconnectSubscription = this.network.onDisconnect().subscribe((data) => {
      console.log(data)
      const toast =  this.toastController.create({
        message: 'network was disconnected :-(.',
        duration: 2000
      });
      toast.present();
      console.log('network was disconnected :-(');
      console.log(disconnectSubscription);
    });
    let connectSubscription = this.network.onConnect().subscribe((data) => {
      console.log(data)
      console.log('network connected!');})
      console.log(connectSubscription)
  }
  
  
 
  goDocuments(){
    this.navCtrl.setRoot(DocumentsPage);
  }
  goContact(){
    this.navCtrl.setRoot(ContactPage);
  }
  goGallerie(){
    this.navCtrl.setRoot(GalleriePage)
  }
}
