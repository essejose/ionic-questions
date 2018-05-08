import { Component, ViewChild} from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';

import { TranslateService } from "@ngx-translate/core";

@Component({
  templateUrl: 'app.html'
})
export class MyApp { 
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;
  pages: Array<{title: string, component: any}>

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen, 
              private translateService: TranslateService,) {

   
      this.pages = [
        { title: 'List', component: LoginPage },
        { title: 'List 2 ', component: LoginPage }
      ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide(); 
      this.setTranslate();  
    }); 
  } 
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  setTranslate() {
  //  let defaultLang = this.translateService.getBrowserLang();
 
    this.translateService.setDefaultLang("pt_br");
    this.translateService.use("pt_br"); 
    // this.storage.getData("lang").then(res => {
    //   this.traducaoAtiva = res;
    //   if (this.traducaoAtiva != null) {
    //     this.translateService.use(this.traducaoAtiva);
    //   }
    // });
  }

}

