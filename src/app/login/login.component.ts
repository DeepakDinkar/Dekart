import { DataService } from '../data.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


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
    theme = 'orange';
    showProgress = false;
    showLogin = true;
    constructor() {
        DataService.showLogin.subscribe(this.show.bind(this));
        DataService.themeEmitter.subscribe(this.changeTheme.bind(this));
    }

    ngOnInit() { }

    show(showLogin: boolean) {
        this.showLogin = showLogin;
    }

    loadProgress(progress: boolean) {
        this.showProgress = progress;
    }
    changeTheme(theme: any) {
        this.theme = theme;
    }
}
