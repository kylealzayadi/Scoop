import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { normalizeURL } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  myphoto:any;
  options;
  constructor(public navCtrl: NavController, private camera: Camera, private sanitizer: DomSanitizer) {
    this.myphoto= "https://www.collinsdictionary.com/images/thumb/duck_170690246_250.jpg?version=3.1.158";
    this.options =  {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  }
  takePhoto(){
  
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):

      // this.myphoto = 'data:image/jpeg;base64,' + imageData;
      let img = normalizeURL(imageData);
      console.log(img);
      this.myphoto = this.sanitizer.bypassSecurityTrustResourceUrl(img);
    }, (err) => {
      console.log(err);
      // Handle error
    });
  }
}


