import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from 'src/app/app-route.constants';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    cartItems: any[] = [];
    totalPrice = 0;
    totalOfferPrice = 0;
    offer: number;

    constructor(private afs: AngularFireDatabase, private router: Router) { }

    ngOnInit() {
        const userId = sessionStorage.getItem('userId');
        this.afs.list('users/' + userId + '/cart').valueChanges().subscribe(cartItems => {
            this.cartItems = cartItems;
            this.calcTotalPrice();
        });
    }

    buyProducts() {
        this.router.navigate([ROUTES.BUY_SECTION]);
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

    private setOffer(basePrice: number, offerPrice: number): number {
        return Math.floor((Number(basePrice) - Number(offerPrice)) / Number(basePrice) * 100);
    }
}
