import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VgAPI } from 'videogular2/core';
/**
 * Generated class for the ListMoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-movies',
  templateUrl: 'list-movies.html',
})
export class ListMoviesPage {
  api:VgAPI;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListMoviesPage');
  }
  onPlayerReady(api: VgAPI) {
    this.api = api;
   } 
} 
