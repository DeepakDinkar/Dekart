import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularFirebaseModule } from './../angular-firebase/angular-firebase.module';
import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { CardComponent } from './components/card/card.component';

@NgModule({
	imports: [
		CommonModule,
		AngularFirebaseModule,
		AngularMaterialModule
	],
	declarations: [CardComponent],
	exports: [CardComponent]
})
export class SharedModule { }
