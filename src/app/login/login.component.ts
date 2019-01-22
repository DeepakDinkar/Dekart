import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [
        trigger('flyInOut', [
            state('in', style({ opacity: 1 })),
            transition(':enter', [style({ opacity: 0 }), animate(1000)])
        ])
    ]
})
export class LoginComponent implements OnInit {
    theme = 'indigo';
    loadProgress = false;
    showLogin = true;
    constructor() {
        DataService.showLogin.subscribe(this.show.bind(this));
        DataService.themeEmitter.subscribe(this.changeTheme.bind(this));
    }

    ngOnInit() {}
    show(showLogin: boolean) {
        this.showLogin = showLogin;
    }

    changeTheme(theme: any) {
        this.theme = theme;
    }
}
