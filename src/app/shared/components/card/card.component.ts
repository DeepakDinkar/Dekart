import { AfterContentInit, Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Color } from './../../../core/color';
import { ROUTES } from 'src/app/app-route.constants';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() card: any;
    @Input() currentPath: string;
    ROUTES = ROUTES;

    constructor(private router: Router) {}

    ngOnInit() {}

    navigate(route: string) {
        this.router.navigate([route], {
            queryParams: { path: this.currentPath, product: this.card.name }
        });
    }
}
