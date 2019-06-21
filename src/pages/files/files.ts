import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { RubriqueProvider } from '../../services/rubrique';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';

declare var cordova: any;
/**
 * Generated class for the FilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-files',
  templateUrl: 'files.html',
})
export class FilesPage {
  id:any;
  files:any;
 
  constructor(private document : DocumentViewer,
    private file : File,
    private transfer:FileTransfer,
    private platform :Platform,
    public navCtrl: NavController,public loader: LoadingController, public navParams: NavParams, public service : RubriqueProvider) {
    
      this.id= navParams.get('id');
    console.log(this.id);

    service.allfile().subscribe((data :any)=>{
   
      this.files = data.filter(y=>y.id_rubrique === this.id);
    
      
    })
  }
  /*openlocalPDF(){
    let path = null;
    if(this.platform.is('ios')){
      path = this.file.documentsDirectory;
      
    }else{
      path = this.file.dataDirectory
     
    }
    const options : DocumentViewerOptions={
      title :'My PDF'
    };
    this.document.viewDocument(path+'assets/pdf1.pdf','application/pdf',options);
  }*/
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
    
 
  bs(){
  
  this.navCtrl.setRoot(HomePage)
}
}
