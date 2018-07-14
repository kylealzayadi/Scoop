import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import { Platform } from 'ionic-angular';
import { Component} from "@angular/core/";
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map;
  lat;
  long;
  constructor( public platform: Platform, private geolocation: Geolocation) {
    platform.ready().then(() => {
      console.log('loading map')


        this.loadMap();
    });
}

  loadMap() {
    const options = {
      enableHighAccuracy : true
    }

    this.geolocation.getCurrentPosition(options).then((resp) => {
      this.lat = +resp.coords.latitude;
      this.long = +resp.coords.longitude;
      
      let mapOptions: GoogleMapOptions = {
        camera: {
           target: {
             lat: this.lat,
             lng: this.long
           },
           zoom: 18,
           tilt: 30,
         }
      };

      this.map = GoogleMaps.create('map_canvas', mapOptions);

      let marker: Marker = this.map.addMarkerSync({
        title: 'Current Location',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: this.lat,
          lng: this.long,
        }
      });
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        alert('clicked');
      });
  
    }).catch((error) => {
      console.log('Error getting location', error);
    });



  }
}