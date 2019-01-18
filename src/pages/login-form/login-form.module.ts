import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginFormPage } from './login-form';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LoginFormPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginFormPage),
    ComponentsModule,
    AngularFireAuthModule
  ],
})
export class LoginFormPageModule {}
