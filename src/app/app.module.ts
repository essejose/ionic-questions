import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule , HttpClient} from '@angular/common/http'
import { HttpModule} from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; 

// Videogular2 imports
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

import { DataProvider } from '../providers/data/data';
import { ComponentsModule } from '../components/components.module';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPageModule } from '../pages/login/login.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { QuizPageModule } from '../pages/quiz/quiz.module'
import { ListMoviesPageModule } from '../pages/list-movies/list-movies.module'
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
  ], 
  imports: [

    ComponentsModule,
    LoginPageModule,
    RegisterPageModule,
    QuizPageModule,
    ListMoviesPageModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,  
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }), 

    IonicModule.forRoot(MyApp),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,  
     
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    AuthServiceProvider,
 
  ]
})
export class AppModule {}
