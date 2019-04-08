import {
    animate,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ROUTES, ROUTE_PARAMS } from '../app-route.constants';
import { AuthService } from './../core/auth.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    animations: [
        trigger('flyInOut', [
            state('in', style({ opacity: 1 })),
            transition(':enter', [style({ opacity: 0 }), animate(1000)])
        ])
    ]
})
export class MainComponent implements OnInit {
    theme = 'indigo';
    active = 'main';
    gridSize = 6;
    isHandset: Observable<boolean>;
    ROUTES = ROUTES;
    ROUTE_PARAMS = ROUTE_PARAMS;

    constructor(private router: Router, private authService: AuthService) {}

    ngOnInit() {
        this.authService.getLoggedUserDetails();
    }

    changeGridSize(event: any) {
        this.gridSize = event.value;
    }

    changeTheme(theme: string) {
        this.theme = theme;
    }
    route(routeTo: string) {
        this.active = routeTo;
        this.router.navigate(['/home/' + routeTo]);
    }

    getPage(outlet) {}

    navigate(route: string, data?: string) {
        this.router.navigate([route], { queryParams: { data: data } });
    }
}
