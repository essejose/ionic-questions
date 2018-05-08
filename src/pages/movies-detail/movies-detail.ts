import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VgAPI } from 'videogular2/core';
/**
 * Generated class for the MoviesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies-detail',
  templateUrl: 'movies-detail.html',
})
export class MoviesDetailPage {
  api:VgAPI;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) { 
    
    let id = navParams.get('movieId'); 
    console.log(id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesDetailPage');
  }
  onPlayerReady(api: VgAPI) {
    this.api = api;
   } 

}
