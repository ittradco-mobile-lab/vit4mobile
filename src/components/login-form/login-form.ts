import { ToastController, NavController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  form
  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth, private toastCtrl: ToastController, private navCtrl: NavController ) {
    //Initializing the form with FormBuild class
    this.form=this.fb.group({
      user: [""],
      password: [""]
    });
  }
  async login(){
      try{
        //trying to log in
        console.log(this.username.value)
        const result = await this.afAuth.auth.signInWithEmailAndPassword(this.username.value, this.password.value);
        //changing the view to the 'entered' view
        if(this.afAuth.auth.currentUser.emailVerified){
          this.navCtrl.setRoot("EnteredPage");
        }
        else{
          this.toastCtrl.create({
            message: "Account not confirmed yet!",
            duration: 2000,
            position: "bottom"
          }).present();
        }
      }
      catch(e){
        //catch any login errors
        let toast = this.toastCtrl.create({
          message: e.message,
          duration: 2000,
          position: "bottom"
        }).present();
      }
  }
  //dynamically get form variables
  get username(){
    return this.form.get("user");
  }
  get password(){
    return this.form.get("password");
  }
}
