import { CardDirective } from '../card.directive';
import { Card } from '../card/card';
import { Color } from '../color';
import { DataService } from '../data.service';
import { AfterContentInit, Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {
    color = new Color();
    @ViewChild(CardDirective) card: CardDirective;
    width = window.innerWidth;
    gridSize = 5;
    cards: any[];
    addCard: Card[];
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
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

    private getData() {
        this.addCard = this.dataService.getData();
        this.loadComponent();
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

    private loadComponent() {
        // for (const card of this.addCard) {
        //   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        //     card.component
        //   );
        //   const viewContainerRef = this.card.viewContainerRef;
        //   // viewContainerRef.clear(); [loads only one component]
        //   const componentRef = viewContainerRef.createComponent(componentFactory);
        //   // (<CardComponent>componentRef.instance).data = card;
        // }
    }

    expandCard(id: number, value: string) {
        const index = this.cards.findIndex(card => card.id === id);
        if (value === 'col') {
            if (this.cards[index].cols < this.gridSize) {
                this.cards[index].cols = this.cards[index].cols + 1;
            }
        } else {
            if (this.cards[index].rows < this.gridSize) {
                this.cards[index].rows = this.cards[index].rows + 1;
            }
        }
    }

    shrinkCard(id: number, value: string) {
        const index = this.cards.findIndex(card => card.id === id);
        if (value === 'col') {
            if (this.cards[index].cols > 1) {
                this.cards[index].cols = this.cards[index].cols - 1;
            }
        } else {
            if (this.cards[index].rows > 1) {
                this.cards[index].rows = this.cards[index].rows - 1;
            }
        }
    }
}
