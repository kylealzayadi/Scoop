import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  BaseArrayClass
} from '@ionic-native/google-maps';
import { Platform } from 'ionic-angular';
import { Component } from "@angular/core/";
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  map;
  lat;
  long;

  constructor(public platform: Platform, private geolocation: Geolocation) {
    platform.ready().then(() => {
      console.log('loading map')
      this.loadMap();
    });
  }



  loadMap() {



    const options = {
      enableHighAccuracy: true
    }

    this.geolocation.getCurrentPosition(options).then((resp) => {
      this.lat = +resp.coords.latitude;
      this.long = +resp.coords.longitude;
        var Image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
      let MARKERS: BaseArrayClass<any> = new BaseArrayClass<any>([
        //UCLA
        {
          position: { lat: 34.0689, lng: -118.4452 },

        },
        //Current Location
        {
          position: { lat: this.lat, lng: this.long },
          icon: Image
        },
        //Jimmie Baldwin's Adrress
        {
          position: { lat: 33.924052, lng: -118.260817 },
        },
        //The Cube
        {
          position: {
            lat: 34.017392, lng: -118.278463,
          }
        },
        //School
        {
          position: { lat: 34.096271, lng: -118.314839 },
        }
      ])
        
      // where to load the map and how zommed in
      let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: this.lat,
            lng: this.long
          },
          zoom: 18,
          tilt: 30,

        }
      }

      // create the map
      this.map = GoogleMaps.create('map_canvas', mapOptions);
      


      // add the markers
      MARKERS.forEach((data: any) => {
        data.disableAutoPan = true;
        let marker: Marker = this.map.addMarkerSync(data);

      })
      
    });
  }

}