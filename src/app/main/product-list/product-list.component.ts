import { AfterContentInit, Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Card } from 'src/app/shared/components/card/card';

import { Color } from './../../core/color';
import { DataService } from './../../core/data.service';


@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterContentInit {
	color = new Color();
	width = window.innerWidth;
	gridSize = 5;
	cards: any[];
	addCard: Card[];
	constructor(
		private dataService: DataService,
		private afs: AngularFireDatabase
	) { }

	ngOnInit() {
		this.dataService.gridObject.subscribe(this.getGridSize.bind(this));
		this.onResize(window.innerWidth);
		const users = this.afs.list('products');
		users.valueChanges().subscribe(data => {
			console.log(data);
		});
	}

	ngAfterContentInit() {
		this.cards = [
			{
				id: 1,
				title: 'Card 1',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 2,
				title: 'Card 2',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 3,
				title: 'Card 3',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 4,
				title: 'Card 4',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 5,
				title: 'Card 2',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 6,
				title: 'Card 3',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 1,
				title: 'Card 1',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 2,
				title: 'Card 2',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 3,
				title: 'Card 3',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 4,
				title: 'Card 4',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 5,
				title: 'Card 2',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 6,
				title: 'Card 3',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 1,
				title: 'Card 1',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 2,
				title: 'Card 2',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 3,
				title: 'Card 3',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 4,
				title: 'Card 4',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 5,
				title: 'Card 2',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 6,
				title: 'Card 3',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 1,
				title: 'Card 1',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 2,
				title: 'Card 2',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 3,
				title: 'Card 3',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 4,
				title: 'Card 4',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 5,
				title: 'Card 2',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 6,
				title: 'Card 3',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 1,
				title: 'Card 1',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 2,
				title: 'Card 2',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 3,
				title: 'Card 3',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 4,
				title: 'Card 4',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 5,
				title: 'Card 2',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 6,
				title: 'Card 3',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			},
			{
				id: 7,
				title: 'Card 4',
				cols: this.getSize(),
				rows: this.getSize(),
				src: 'assets/images/Chrysanthemum.jpg'
			}
		];
	}

	private getGridSize(size: number) {
		this.gridSize = size;
	}
	private getSize() {
		return Math.floor(Math.random() * (this.gridSize - 1) + 1);
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
