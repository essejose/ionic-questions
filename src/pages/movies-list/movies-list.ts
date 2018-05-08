import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesServiceProvider } from '../../providers/movies-service/movies-service';
 
@IonicPage()
@Component({
  selector: 'page-movies-list',
  templateUrl: 'movies-list.html',
})
export class MoviesListPage {

  title :string = "Video Aulas";
  modulos:any;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private moviesService: MoviesServiceProvider) {
  }

  ionViewDidLoad() {
    
    this.moviesService.loadMovies().then((data) => {   
                 this.modulos = data;
                 console.log(this.modulos)
    });

  }

  goToMoviesDetail() {
  
    this.navCtrl.push("MoviesDetailPage", { movieId:'2' });
  }

  goToQuizPage() {
    
    this.navCtrl.push("QuizPage", { movieId:'2' });
  }

} 
