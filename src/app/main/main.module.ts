import { AppRoutingModule } from './../app-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AngularFirebaseModule } from './../angular-firebase/angular-firebase.module';
import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { BuySectionComponent } from './buy-section/buy-section.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProfileComponent } from './profile/profile.component';
import { RewardsComponent } from './rewards/rewards.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HelpComponent } from './help/help.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		AngularMaterialModule,
		AngularFirebaseModule,
		AppRoutingModule
	],
	declarations: [
		HomeComponent,
		ProductListComponent,
		ProductDescriptionComponent,
		CartComponent,
		BuySectionComponent,
		PaymentsComponent,
		OrdersComponent,
		WishlistComponent,
		ProfileComponent,
		RewardsComponent,
		NotificationsComponent,
		MainComponent,
		HelpComponent
	]
})
export class MainModule { }
