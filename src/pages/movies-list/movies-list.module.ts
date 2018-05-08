import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviesListPage } from './movies-list';
import { MoviesServiceProvider } from '../../providers/movies-service/movies-service';

@NgModule({
  declarations: [
    MoviesListPage,
  ],
  imports: [ 
    IonicPageModule.forChild(MoviesListPage),
  ],
  providers: [ 
    MoviesServiceProvider  
 
  ]
})
export class MoviesListPageModule {}
