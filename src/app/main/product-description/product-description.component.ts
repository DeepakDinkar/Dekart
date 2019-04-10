import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { FirebaseDatabaseService } from './../../angular-firebase/firebase-database.service';
import { FirebaseStorageService } from './../../angular-firebase/firebase-storage.service';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];
@Component({
    selector: 'app-product-description',
    templateUrl: './product-description.component.html',
    styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {
    width = window.innerWidth;
    card: any;
    cards: any[];
    gridSize = 5;
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;
    img: any;
    currentPath: string;
    list: AngularFireList<any[]>;
    constructor(
        private route: ActivatedRoute,
        private matSnackBar: MatSnackBar,
        private afs: AngularFireDatabase,
        private database: FirebaseDatabaseService,
        private storage: FirebaseStorageService
    ) {}

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.currentPath = params.path;
            this.setCard(params.path, params.product);
        });
        this.onResize(window.innerWidth);
    }

    addToCart() {
        const userId = sessionStorage.getItem('userId');
        if (userId) {
            const cart = this.afs.list('users/' + userId + '/cart');
            cart.push(this.card);
            this.matSnackBar.open('', 'Item Added to cart successfully.', {
                duration: 3000
            });
        }
    }

    private setCard(path: string, product: string) {
        this.database.getDataByChild(path, 'name', product).subscribe(card => {
            const cards = <any[]>card;
            this.storage.getStorageData(cards[0].src).subscribe(image => {
                this.card = card[0];
                this.card.image = image;
                this.card.offer = this.setOffer(
                    this.card.basePrice,
                    this.card.offerPrice
                );
                this.loadSimilarProducts(path);
            });
        });
    }

    private loadSimilarProducts(path) {
        this.cards = [];
        this.database.getData(path).subscribe(cards => {
            for (const card of cards) {
                this.storage.getStorageData(card.src).subscribe(image => {
                    card.image = image;
                    card.offer = this.setOffer(card.basePrice, card.offerPrice);
                    this.cards.push(card);
                });
            }
        });
    }

    private setOffer(basePrice: string, offerPrice: string): number {
        if (typeof basePrice !== 'number') {
            basePrice = basePrice.replace(/,/g, '');
        }
        if (typeof offerPrice !== 'number') {
            offerPrice = offerPrice.replace(/,/g, '');
        }
        return Math.floor(
            ((Number(basePrice) - Number(offerPrice)) / Number(basePrice)) * 100
        );
    }

    onResize(width: any) {
        if (width >= 1500) {
            this.gridSize = 5;
        } else if (width >= 1100 && width <= 1499) {
            this.gridSize = 4;
        } else if (width >= 800 && width <= 1099) {
            this.gridSize = 3;
        } else if (width >= 600 && width <= 799) {
            this.gridSize = 2;
        } else if (width <= 599) {
            this.gridSize = 1;
        }
    }

    // createProductsList() {
    //     this.list = this.db.list('products/-LaoP2zjurA4Eb8pLQSQ', ref =>
    //         ref.orderByChild('alias').startAt('a')
    //     );
    //     this.list.valueChanges().subscribe(data => {
    //         console.log(data);
    //     });
    // }

    // getImage() {
    //     const ref = this.storage.ref('shoes/shoe-product.jpg');
    //     ref.getDownloadURL().subscribe(data => {
    //         this.img = data;
    //     });
    // }
}
