import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, EventEmitter } from '@angular/core';

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
    static loginEmitter = new EventEmitter();
    theme = 'indigo';
    showProgress = false;
    showLogin = true;

    constructor() {
        LoginComponent.loginEmitter.subscribe(this.show.bind(this));
    }

    ngOnInit() { }

    show(showLogin: boolean) {
        this.showLogin = showLogin;
    }

    loadProgress(progress: boolean) {
        this.showProgress = progress;
    }

}
