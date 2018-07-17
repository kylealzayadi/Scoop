import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  myphoto:any;
  options;
  constructor(public navCtrl: NavController, private camera: Camera, public sanitizer: DomSanitizer) {
    this.myphoto= "https://www.collinsdictionary.com/images/thumb/duck_170690246_250.jpg?version=3.1.158";
    this.options =  {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  }
  takePhoto(){
  
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      console.log(imageData);
      console.log('data:image/jpeg;base64' + imageData)
      // this.myphoto = 'data:image/jpeg;base64,' + imageData;
      this.myphoto = 'data:image/jpeg;base64' + imageData
      console.log(this.myphoto);
    }, (err) => {
      // Handle error
    });
  }
}


