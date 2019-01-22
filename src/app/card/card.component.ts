import { AfterContentInit, Component, OnInit } from '@angular/core';

import { Color } from '../color';
import { DataService } from '../data.service';

@Component({
    selector: "app-card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit, AfterContentInit {
    data: any[];
    color: any;
    breakPoint: any;
    gridByBreakpoint = {
        xl: 8,
        lg: 6,
        md: 4,
        sm: 2,
        xs: 1
    };
    constructor(
        private dataService: DataService,
    ) {
        this.color = new Color().getRandomColor("Violet");
    }
    ngOnInit() {
        this.data = this.dataService.getData();
    }

    ngAfterContentInit() {
    }
}
