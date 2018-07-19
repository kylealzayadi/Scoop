import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '../../../node_modules/@ionic-native/barcode-scanner';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  qrData= null;
  createdCode=null;
  scannedCode=null;

  constructor(private barcodeScanner: BarcodeScanner ) {
  }
createCode(){
  this.createdCode= this.qrData;

}
scanCode(){
this.barcodeScanner.scan().then(barcodeData => {
this.scannedCode=barcodeData.text;
})
}
  

}
