import { CustomValidators } from './../validators';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController, NavController } from 'ionic-angular';
/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  form;
  constructor(fb: FormBuilder,private afAuth: AngularFireAuth, private toastCtrl: ToastController, private navCtrl: NavController) {
    console.log('Hello RegisterFormComponent Component');
    //Build the Form with FormBuilder
    this.form=fb.group({
    email: ['', [
      Validators.required,
      Validators.email
    ],
      CustomValidators.checkEmail
    ],
    password: ['', [
      Validators.required,
      CustomValidators.passwordValidate,
      Validators.minLength(6)]
    ],
    confPassword: ['',
      Validators.required
    ]
    }, {
      validator: CustomValidators.passwordMatch 
    })
  }
  async register(){
    //Call Firebase Server
    if(this.form.valid){
      try{
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value);
        let toast = this.toastCtrl.create({
          message: "Account registered successfully!",
          duration: 2000,
          position: "bottom"
        }).present();
        this.afAuth.auth.currentUser.sendEmailVerification();
        setTimeout(()=>{
          this.navCtrl.pop();
        }, 2000);
      }
      catch(e){
        console.error(e);
        let toast = this.toastCtrl.create({
          message: e.message,
          duration: 2000,
          position: "bottom"
        }).present();
      }
    }
    else{
      let toast = this.toastCtrl.create({
        message: "An error occured",
        duration: 2000,
        position: "bottom"
      }).present();
    }
  }
  
  //Get all Form Controls
  get email(){
    return this.form.get("email");
  }
  get password(){
    return this.form.get("password");
  }
  get confPassword(){
    return this.form.get("confPassword");
  }

}
