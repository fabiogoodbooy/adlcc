import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RubriqueProvider } from '../../services/rubrique';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

file:any;
filterfile:any;
arrayfile : any = [];
  constructor(public navCtrl: NavController, public service : RubriqueProvider) {
  
   service.allfile().subscribe((data :any)=>{
   
      this.arrayfile.push = data;
       console.log(this.arrayfile);

   
    console.log(data);
    this.file = data.filter(y=>y.id === 1);
    
    console.log(this.file);
    
      
    })
  }

   
    
 

}
