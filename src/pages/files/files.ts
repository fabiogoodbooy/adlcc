import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RubriqueProvider } from '../../services/rubrique';
import { FilesProvider } from '../../services/files';
import { DocumentsPage } from '../documents/documents';

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
 
  constructor(private serviceFile : FilesProvider,
    public navCtrl: NavController,public loader: LoadingController, public navParams: NavParams, public service : RubriqueProvider) {
    
      this.id= navParams.get('id');
    console.log(this.id);

    service.allfile().subscribe((data :any)=>{
   
      this.files = data.filter(y=>y.id_rubrique === this.id);
    
      
    })
  }

  downloadPDF(title,namepdf,link){
    this.serviceFile.downloadPDF(title,namepdf,link);
  }
 
  bs(){
  
  this.navCtrl.setRoot(DocumentsPage)
}
}
