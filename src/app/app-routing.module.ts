import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { BuySectionComponent } from './main/buy-section/buy-section.component';
import { CartComponent } from './main/cart/cart.component';
import { HelpComponent } from './main/help/help.component';
import { HomeComponent } from './main/home/home.component';
import { MainComponent } from './main/main.component';
import { NotificationsComponent } from './main/notifications/notifications.component';
import { OrdersComponent } from './main/orders/orders.component';
import { PaymentsComponent } from './main/payments/payments.component';
import { ProductDescriptionComponent } from './main/product-description/product-description.component';
import { ProductListComponent } from './main/product-list/product-list.component';
import { ProfileComponent } from './main/profile/profile.component';
import { RewardsComponent } from './main/rewards/rewards.component';
import { WishlistComponent } from './main/wishlist/wishlist.component';


const appRoutes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{
		path: 'main',
		component: MainComponent,
		children: [
			{ path: '', redirectTo: 'home', pathMatch: 'full' },
			{ path: 'home', component: HomeComponent },
			{ path: 'cart', component: CartComponent },
			{ path: 'buy-section', component: BuySectionComponent },
			{ path: 'products-list', component: ProductListComponent },
			{ path: 'product-description', component: ProductDescriptionComponent },
			{ path: 'payments', component: PaymentsComponent },
			{ path: 'orders', component: OrdersComponent },
			{ path: 'wishlist', component: WishlistComponent },
			{ path: 'profile', component: ProfileComponent },
			{ path: 'rewards', component: RewardsComponent },
			{ path: 'notifications', component: NotificationsComponent },
			{ path: 'help', component: HelpComponent }
		]
	}
];
@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
