declare var google: any;
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
      enableHighAccuracy: true,

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

        },
        styles:
          [
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#d60000"
                },
                {
                  "visibility": "simplified"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.neighborhood",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#df1114"
                }
              ]
            },
            {
              "featureType": "administrative.province",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#ee2023"
                }
              ]
            },
            {
              "featureType": "landscape.man_made",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#fff1ad"
                }
              ]
            },
            {
              "featureType": "landscape.natural",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#3ebf03"
                }
              ]
            },
            {
              "featureType": "landscape.natural.landcover",
              "elementType": "labels.text",
              "stylers": [
                {
                  "color": "#000ecc"
                }
              ]
            },
            {
              "featureType": "landscape.natural.terrain",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#ffc533"
                }
              ]
            },
            {
              "featureType": "poi",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.medical",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#00d7eb"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#efe22e"
                }
              ]
            },
            {
              "featureType": "poi.place_of_worship",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#c51b8f"
                }
              ]
            },
            {
              "featureType": "poi.sports_complex",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#123aed"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#ffeb33"
                },
                {
                  "weight": 8
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "transit",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "transit.station.rail",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#945900"
                }
              ]
            }
          ]
      };
        var markerLocations=[
          [34.0224, 118.2851]
        ]
      

        
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
      
          {
          marker = new google.maps.Marker({
           map: this.map,
          title: 'usc',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: 34.0224,
            lng: 118.2851,
          }
        })};
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        alert('clicked');
      });

    }).catch((error) => {
      console.log('Error getting location', error);
    });



  }
}