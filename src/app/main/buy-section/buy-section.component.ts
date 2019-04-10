import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseStorageService } from 'src/app/angular-firebase/firebase-storage.service';
import { FirebaseDatabaseService } from 'src/app/angular-firebase/firebase-database.service';
import { MatSnackBar } from '@angular/material';
import { ROUTES } from 'src/app/app-route.constants';

@Component({
	selector: 'app-buy-section',
	templateUrl: './buy-section.component.html',
	styleUrls: ['./buy-section.component.scss']
})
export class BuySectionComponent implements OnInit {
	cartItems: any[] = [];
	totalPrice = 0;
	totalOfferPrice = 0;
	offer: number;
	deliveryGroup: FormGroup;

	constructor(
		private afs: AngularFireDatabase,
		private fb: FormBuilder,
		private matSnackBar: MatSnackBar,
		private router: Router,
		private route: ActivatedRoute,
		private database: FirebaseDatabaseService,
		private storage: FirebaseStorageService
	) { }

	ngOnInit() {
		this.createDelieveryGroup();
		this.route.queryParams.subscribe(params => {
			if (params.path) {
				this.database.getDataByChild(params.path, 'name', params.product).subscribe(card => {
					const cards = <any[]>card;
					this.storage.getStorageData(cards[0].src).subscribe(image => {
						let card;
						card = cards[0];
						card.image = image;
						card.offer = this.setOffer(card.basePrice, card.offerPrice);
						this.cartItems = [card];
						this.calcTotalPrice();
					});
				});
			} else {
				const userId = sessionStorage.getItem('userId');
				this.afs.list('users/' + userId + '/cart').valueChanges().subscribe(cartItems => {
					this.cartItems = cartItems;
					this.calcTotalPrice();
				});
			}
		});
	}

	conformOrder() {
		this.matSnackBar.open('Success', 'Order placed successfully', { duration: 3000 });
		setTimeout(() => {
			this.router.navigate([ROUTES.HOME]);
		}, 1000);
	}

	private createDelieveryGroup() {
		this.deliveryGroup = this.fb.group({
			address: new FormControl('', Validators.required),
			pincode: new FormControl('', Validators.required),
			phoneNumber: new FormControl('', Validators.required),
			landMark: new FormControl('', Validators.required)
		});
	}

	calcTotalPrice() {
		for (let cart of this.cartItems) {
			if (typeof cart.basePrice !== 'number') {
				this.totalPrice = this.totalPrice + Number(cart.basePrice.replace(/,/g, ''));
			} else {
				this.totalPrice = this.totalPrice + cart.basePrice;
			}
			if (typeof cart.offerPrice !== 'number') {
				this.totalOfferPrice = this.totalOfferPrice + Number(cart.offerPrice.replace(/,/g, ''));
			} else {
				this.totalOfferPrice = this.totalOfferPrice + cart.offerPrice;
			}
		}
		this.offer = this.setOffer(this.totalPrice, this.totalOfferPrice);
	}

	private setOffer(basePrice: any, offerPrice: any): number {
		if (typeof basePrice !== 'number') {
			basePrice = basePrice.replace(/,/g, '');
		}
		if (typeof offerPrice !== 'number') {
			offerPrice = offerPrice.replace(/,/g, '');
		}
		return Math.floor((Number(basePrice) - Number(offerPrice)) / Number(basePrice) * 100);
	}

}
