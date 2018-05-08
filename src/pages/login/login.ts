import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
 

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage { 
  loading: Loading;
  registerCredentials = { email: '', password: '' };
  
  constructor(private nav: NavController,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    public navParams: NavParams) {
  }

  public createAccount() {
    this.nav.push('RegisterPage');
  }

  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {        
        this.nav.setRoot('MoviesListPage');
      } else {
        this.showError("Access Denied");
      }
    }, 
      error => {
        this.showError(error);
      });
  }
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
