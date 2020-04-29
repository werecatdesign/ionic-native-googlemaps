import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { GoogleMaps, GoogleMap, Environment, Marker, GoogleMapOptions, GoogleMapsEvent, LatLng } from '@ionic-native/google-maps/ngx';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage {

  map: GoogleMap;

  constructor( private platform:Platform, private router:Router ) {}

  async ngOnInit(){
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'MY KEY',
      'API_KEY_FOR_BROWSER_DEBUG': 'MY KEY'
    });

    let mapOptions:GoogleMapOptions = {
      camera: {
        target: {
          lat: 51.453339,
          lng: 7.009360
        },
        zoom: 18, 
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Essen central',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat: 51.453339,
        lng: 7.009360
      }
    });

    marker.showInfoWindow();

  }

  openHome(){
    this.router.navigateByUrl('home');
  }
}

