import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  @Input('progress') progress;
  pictures;

  constructor(public navCtrl: NavController,public database: DatabaseProvider) {
    this.pictures=this.database.get();
    console.log(this.pictures);
  }
  ionViewDidEnter(){
    this.pictures=this.database.get();
  }

}
