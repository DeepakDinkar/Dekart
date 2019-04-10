import { FirebaseStorageService } from './../../angular-firebase/firebase-storage.service';
import { FirebaseDatabaseService } from './../../angular-firebase/firebase-database.service';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/components/card/card';
import { Color } from './../../core/color';
import { Routes, Route, Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    width = window.innerWidth;
    gridSize = 5;
    cards: any[] = [];
    currentPath: string;

    constructor(
        private route: ActivatedRoute,
        private database: FirebaseDatabaseService,
        private storage: FirebaseStorageService
    ) {}

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.setCards(params.data);
            this.currentPath = params.data;
        });
        this.onResize(window.innerWidth);
    }

    private setCards(path: string) {
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
        return Math.floor((Number(basePrice) - Number(offerPrice)) / Number(basePrice) * 100);
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
}
