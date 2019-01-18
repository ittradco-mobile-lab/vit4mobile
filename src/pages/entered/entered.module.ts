import { AngularFireAuthModule } from '@angular/fire/auth';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnteredPage } from './entered';

@NgModule({
  declarations: [
    EnteredPage,
  ],
  imports: [
    IonicPageModule.forChild(EnteredPage),
    ComponentsModule,
    AngularFireAuthModule
  ],
})
export class EnteredPageModule {}
