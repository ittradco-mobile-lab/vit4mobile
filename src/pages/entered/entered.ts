import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EnteredPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entered',
  templateUrl: 'entered.html',
})
export class EnteredPage {
  email: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnteredPage');
  }
  ionViewDidEnter() {
    //check if there's a user logged in and either go back to home or keep the page
    //here we should make a server call to keep a session variable with the users
    let userCredentials = this.afAuth.auth.currentUser;
    if(!userCredentials){
      this.navCtrl.setRoot("HomePage");
    }
    else{
      this.email=userCredentials.email;
    }
  }

}
