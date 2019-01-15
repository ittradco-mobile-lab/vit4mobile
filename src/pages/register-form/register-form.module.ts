import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterFormPage } from './register-form';
import { AngularFireAuthModule } from '@angular/fire/auth'
@NgModule({
  declarations: [
    RegisterFormPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterFormPage),
    ComponentsModule,
    AngularFireAuthModule
  ],
})
export class RegisterFormPageModule {}
