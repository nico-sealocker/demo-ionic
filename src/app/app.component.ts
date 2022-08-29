import { Component, OnInit, OnDestroy } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Subscription } from "rxjs";
import { environment } from '../environments/environment';
// Doc internationalization 
// https://enappd.com/blog/how-to-translate-in-ionic-internationalization-and-localization/143/?fbclid=IwAR0BdrmuKIszcTr0RMUIELvoJlzvKouv9SMg1fLHN0VcrIAvHdHzYxi9S84
import { Globalization } from '@ionic-native/globalization/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;

// Doc Google Maps
//https://devdactic.com/capacitor-google-maps-ionic/
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';
// Doc Animation Gesture 
// https://ionicframework.com/docs/utilities/animations > Gesture Animation

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy{

  private languageSubscription: Subscription;

/* --------------------------- CONSTRUCTOR --------------------------- */
  constructor(private platform: Platform,
              private globalization: Globalization,
              private _translate: TranslateService) {

  }
/* ---------------------------- LIFE CYCLE -------------------------- */
ngOnInit(){
    this.initializeApp(); // init app
}
ngOnDestroy(){
  this.languageSubscription.unsubscribe();
}

/* ----------------------------- METHODS ----------------------------- */



/* ------------------------- INITIALIZE APP --------------------------- */
  private initializeApp() {
    this.platform.ready().then((success) => {
        //SplashScreen.hide();
    });
  }



}
