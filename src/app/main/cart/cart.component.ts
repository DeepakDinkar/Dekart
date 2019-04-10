import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    cartItems: any[] = [];
    constructor(private afs: AngularFireDatabase) {}

    ngOnInit() {
		const userId = sessionStorage.getItem('userId');
        this.afs.list('users/' + userId + '/cart').valueChanges().subscribe(cartItems => {
			this.cartItems = cartItems;
        });
    }
}
