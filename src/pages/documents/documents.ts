import { FilesPage } from './../files/files';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RubriqueProvider } from '../../services/rubrique';
import { HomePage } from '../home/home';

/**
 * Generated class for the DocumentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-documents',
  templateUrl: 'documents.html',
})
export class DocumentsPage {
  lists:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    service : RubriqueProvider) {
      service.allrubrique().subscribe((data :any)=>
    {
      this.lists = data;
      console.log(this.lists);
    } )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentsPage');
  }
  backHome(){
  
    this.navCtrl.setRoot(HomePage)
  }
  openRubric(rubrique) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(FilesPage,{
      id : rubrique.id
    });
  }
}
