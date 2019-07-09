import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the GalleriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallerie',
  templateUrl: 'gallerie.html',
})
export class GalleriePage {
  sliderOpts={
    zoom:true,
    slidesPerView:1.5,
    centeredSlides:true,
    spaceBetween:20
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleriePage');
  }
  backHome(){
  
    this.navCtrl.setRoot(HomePage)
  }
}
