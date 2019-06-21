import { Component } from '@angular/core';
import { NavController, Platform, LoadingController } from 'ionic-angular';
import { RubriqueProvider } from '../../services/rubrique';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
declare var cordova: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

files:any;

  constructor(
    private document : DocumentViewer,
    private file : File,
    private transfer:FileTransfer,
    private platform :Platform,
    public navCtrl: NavController,public loader: LoadingController, public service : RubriqueProvider) {
  
   service.allfile().subscribe((data :any)=>{
      this.files= data;
      console.log(this.files);
     
    })
  }
  
  downloadPDF(title,namepdf,link){
    let load = this.loader.create({
      content :'Loading ... '
  });
  load.present().then(()=>{

 

    
    let path = null;
    if(this.platform.is('ios')){
      path = this.file.documentsDirectory;
    }else{
      path =  cordova.file.externalDataDirectory;
    }
   
    const option : DocumentViewerOptions={
      title :title
    };
    
    const transfer = this.transfer.create();
  
    transfer.download(link,path +namepdf).then(entry=>{
 
      let url = entry.toURL()
    
      
      this.document.viewDocument(url,'application/pdf',option)
      
    }).catch(error=>{
      console.log(error);
    })
  });
    load.dismissAll();
  } 
    
 

}
