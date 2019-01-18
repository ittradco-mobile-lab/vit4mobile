import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {

  }
  navigateToLogIn(){
      this.navCtrl.push("LoginFormPage");
  }
  navigateToRegister(){
      this.navCtrl.push("RegisterFormPage");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
