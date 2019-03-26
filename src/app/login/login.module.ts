import { AngularFirebaseModule } from './../angular-firebase/angular-firebase.module';
import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		AngularMaterialModule,
		AngularFirebaseModule
	],
	declarations: [
		LoginComponent,
		UserLoginComponent,
		UserRegisterComponent
	]
})
export class LoginModule { }
