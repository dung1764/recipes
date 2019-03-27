import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'udemy-project';
	ngOnInit() {
		firebase.initializeApp({
			apiKey: "AIzaSyDnqlDOeKlUIJFge8HfAN4QK2qnP-H8LwM",
			authDomain: "ng-recipe-book-b73a4.firebaseapp.com"
		});
	}
}
