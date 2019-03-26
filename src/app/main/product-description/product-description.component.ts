import { MatSnackBar } from '@angular/material';
import { AfterContentInit, Component, ElementRef, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { ROUTES } from 'src/app/app-route.constants';
import { Router } from '@angular/router';

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
	{ position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
	selector: 'app-product-description',
	templateUrl: './product-description.component.html',
	styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit, AfterContentInit {

	width = window.innerWidth;
	cards: any[];
	gridSize = 5;
	displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
	dataSource = ELEMENT_DATA;
	img: any;
	ROUTES = ROUTES;
	list: AngularFireList<any[]>;
	constructor(
		private db: AngularFireDatabase,
		private elementRef: ElementRef,
		private storage: AngularFireStorage,
		private matSnackBar: MatSnackBar,
		private router: Router
	) { }

	ngOnInit() {
		this.onResize(window.innerWidth);
	}

	ngAfterContentInit() {
		this.cards = [
			{
				id: 1,
				title: 'Card 1',
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 2,
				title: 'Card 2',
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 3,
				title: 'Card 3',
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 4,
				title: 'Card 4',
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 5,
				title: 'Card 2',
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 6,
				title: 'Card 3',
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 1,
				title: 'Card 1',
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 2,
				title: 'Card 2',
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 3,
				title: 'Card 3',
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 4,
				title: 'Card 4',
				src: 'assets/images/Chrysanthemum.jpg'
			}];
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

	createProductsList() {
		this.list = this.db.list('products/-LaoP2zjurA4Eb8pLQSQ', ref => ref.orderByChild('alias').startAt('a'));
		this.list.valueChanges().subscribe(data => {
			console.log(data);
		});
	}

	getImage() {
		const ref = this.storage.ref('shoes/shoe-product.jpg');
		ref.getDownloadURL().subscribe(data => {
			this.img = data;
		});
	}

	addToCart() {
		this.matSnackBar.open('', 'Successfully Added to Cart! :)', { duration: 3000 });
	}

	navigate(route: string) {
		this.router.navigate([route]);
	}

}
