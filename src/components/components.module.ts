import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RegisterFormComponent } from './register-form/register-form';
import { LoginFormComponent } from './login-form/login-form';

@NgModule({
    declarations: [RegisterFormComponent,
    LoginFormComponent],
    imports: [IonicModule],
    exports: [RegisterFormComponent,
    LoginFormComponent]
})

export class ComponentsModule{}
