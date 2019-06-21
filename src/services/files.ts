import { Injectable } from "@angular/core";
import { FileTransfer } from "@ionic-native/file-transfer";
import { Platform } from "ionic-angular";
import { File } from "@ionic-native/file";
import { DocumentViewer, DocumentViewerOptions } from "@ionic-native/document-viewer";
declare var cordova: any;
@Injectable()

export class FilesProvider{
    constructor(private document : DocumentViewer,
        private file : File,
        private transfer:FileTransfer,
        private platform :Platform){
    }
    downloadPDF(title,namepdf,link){
       
     
    
        
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
        });
    }
     
        
}