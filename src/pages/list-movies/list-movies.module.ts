import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListMoviesPage } from './list-movies';
// Videogular2 imports
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

@NgModule({
  declarations: [
    ListMoviesPage,
  ],
  imports: [
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    IonicPageModule.forChild(ListMoviesPage),
  ],
})
export class ListMoviesPageModule {}
