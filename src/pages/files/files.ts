import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
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
    private fileOpener : FileOpener,
    private transfer:FileTransfer,
    private platform :Platform,
    public navCtrl: NavController, public navParams: NavParams, public service : RubriqueProvider) {
    
      this.id= navParams.get('id');
    console.log(this.id);

    service.allfile().subscribe((data :any)=>{
   
      this.files = data.filter(y=>y.id_rubrique === this.id);
    
    console.log(this.files);
      
    })
  }
  openlocalPDF(){
    let path = null;
    if(this.platform.is('ios')){
      path = this.file.documentsDirectory;
      
    }else{
      path = this.file.dataDirectory
      console.log(path);
    }
    const options : DocumentViewerOptions={
      title :'My PDF'
    };
    this.document.viewDocument('assets/pdf1.pdf','application/pdf',options);
  }
  downloadPDF(){
    let path = null;
    if(this.platform.is('ios')){
      path = this.file.documentsDirectory;
    }else{
      path =  cordova.file.externalDataDirectory;
    }
   
    const option : DocumentViewerOptions={
      title :'My PDF'
    };
    
    const transfer = this.transfer.create();
    console.log(transfer);
    transfer.download('https://devdactic.com/html/5-simple-hacks-LBT.pdf',path +'myfile.pdf').then(entry=>{
      debugger
      let url = entry.toURL()
      this.document.viewDocument(url,'application/pdf',option)
      
    })
  }
 /* openPDF(){
    let filePath = this.file.applicationDirectory + 'www/assets';
    
    if(this.platform.is('android')){
      let fakeName = Date.now();
      console.log("!!!!!")
      this.file.copyFile(filePath,'/pdf1.pdf',this.file.dataDirectory,`${fakeName}.pdf`).then(result => {
        this.fileOpener.open(result.nativeURL,'application/pdf');
      });

    }else{
      const option : DocumentViewerOptions = {
        title : 'My PDF'
      }
      this.document.viewDocument(`${filePath}/pdf1.pdf`,'application/pdf',option)
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FilesPage');
  }*/

}
