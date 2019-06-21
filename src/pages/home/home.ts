import { Component } from '@angular/core';
import { NavController, Platform, LoadingController, ToastController } from 'ionic-angular';
import { RubriqueProvider } from '../../services/rubrique';
import { Network } from '@ionic-native/network';
import { FilesProvider } from '../../services/files';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

files:any;

  constructor(private serviceFile : FilesProvider,
    public toastController: ToastController,
    private network: Network,
    public navCtrl: NavController, public service : RubriqueProvider) {
  
   service.allfile().subscribe((data :any)=>{
      this.files= data;
      console.log(this.files);
     
    })
  
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      const toast =  this.toastController.create({
        message: 'network was disconnected :-(.',
        duration: 2000
      });
      toast.present();
      console.log('network was disconnected :-(');
    });
    let connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected!');})
  }
  
  downloadPDF(title,namepdf,link){
 this.serviceFile.downloadPDF(title,namepdf,link);

  } 
    
 

}
