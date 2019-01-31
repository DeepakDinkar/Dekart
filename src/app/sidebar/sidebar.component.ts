import { animate, state, style, transition, trigger } from '@angular/animations';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';
import { DataService } from '../data.service';


@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    animations: [
        trigger('flyInOut', [
            state('in', style({ opacity: 1 })),
            transition(':enter', [style({ opacity: 0 }), animate(1000)])
        ])
    ]
})
export class SidebarComponent implements OnInit {
    theme = 'orange';
    active = 'main';
    gridSize = 6;
    isHandset: Observable<boolean>;

    constructor(
        private dataService: DataService,
        private router: Router,
        private breakpointObserver: BreakpointObserver,
        private authService: AuthService
    ) { }

    changeGridSize(event: any) {
        this.gridSize = event.value;
        this.dataService.gridObject.next(this.gridSize);
    }

    changeTheme(theme: string) {
        this.theme = theme;
        DataService.themeEmitter.emit(theme);
    }
    private route(routeTo: string) {
        this.active = routeTo;
        this.router.navigate(['/home/' + routeTo]);
    }

    getPage(outlet) { }

    ngOnInit() {
        this.authService.getLoggedUserDetails();
    }
}
