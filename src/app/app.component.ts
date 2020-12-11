import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstFirebaseBookShelvesProject';
  constructor() {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
     apiKey: 'AIzaSyCVJkqmgFjVbNQD1fATaYmYYY2epZuO2NA',
     authDomain: 'bookshelvesproject-5a82c.firebaseapp.com',
     projectId: 'bookshelvesproject-5a82c',
     storageBucket: 'gs://bookshelvesproject-5a82c.appspot.com',
     messagingSenderId: '709448464169',
     appId: '1:709448464169:web:6092b33fdff15bd68ba938',
	 databaseURL: "https://bookshelvesproject-5a82c-default-rtdb.firebaseio.com/",
     measurementId: 'G-7WMEGSMVND'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
  }

}
