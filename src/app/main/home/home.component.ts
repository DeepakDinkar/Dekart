import { BreakpointObserver } from '@angular/cdk/layout';
import { DataService } from './../../core/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    cards: any[];
    cols: number;
    constructor(
        private dataService: DataService,
        private breakpointObserver: BreakpointObserver
    ) {
        this.breakpointObserver.observe(['(min-width:550px)']).subscribe(result => {
            this.cols = result.matches ? 2 : 1;
        });
    }

    ngOnInit() {
        this.cards = this.dataService.getData();
    }
}
