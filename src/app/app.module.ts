/* MODULES */
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { RouterModule } from '@angular/router';
import { IonicImageLoaderModule } from 'ionic-image-loader-v5';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { IonicStorageModule } from '@ionic/storage-angular';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

/* PROVIDERS */
import { Globalization } from '@ionic-native/globalization/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
//import { FileTransfer } from '@awesome-cordova-plugins/file-transfer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
/*import { File } from '@awesome-cordova-plugins/file/ngx';*/
import { File } from '@ionic-native/file/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';

import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

/* HTTP Loader for translation */
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
  	BrowserModule, 
    BrowserAnimationsModule,
  	IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
  	AppRoutingModule,
  	HttpClientModule,
    Ng2TelInputModule,
    RouterModule,
    IonicImageLoaderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    GooglePlaceModule,
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    Globalization,
    Keyboard,
    WebView,
    FileTransfer,
    File,
    SocialSharing,
    CallNumber,
    BarcodeScanner,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


