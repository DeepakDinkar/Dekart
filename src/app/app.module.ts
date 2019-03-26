import { MainModule } from './main/main.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFirebaseModule } from './angular-firebase/angular-firebase.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		AngularMaterialModule,
		AngularFirebaseModule,
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		CoreModule,
		LoginModule,
		MainModule,
		SharedModule
	],
	exports: [],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
