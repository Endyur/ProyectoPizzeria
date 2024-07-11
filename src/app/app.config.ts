import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { getAnalytics } from "firebase/analytics"

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), 
   provideFirebaseApp(() => initializeApp({"projectId":"app-pizzeria-c6b1c","appId":"1:310138621946:web:08032066c127239e9e5e43","storageBucket":"app-pizzeria-c6b1c.appspot.com","apiKey":"AIzaSyBN1U-CeyN285KCB8ThxgiyTlUpG0uJ4GA","authDomain":"app-pizzeria-c6b1c.firebaseapp.com","messagingSenderId":"310138621946","measurementId":"G-TL4RTS58NS"})), provideFirestore(() => getFirestore())]
};
