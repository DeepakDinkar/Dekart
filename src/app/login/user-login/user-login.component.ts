import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { ROUTES } from 'src/app/app-route.constants';
import { AuthService } from 'src/app/core/auth.service';
import { DataService } from 'src/app/core/data.service';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
    loginGroup: FormGroup;
    invalidUser: boolean;
    @Output() showProgress = new EventEmitter<boolean>();
    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private matSnackBar: MatSnackBar,
        private afs: AngularFireDatabase
    ) { }

    ngOnInit() {
        this.loginGroup = this.formBuilder.group({
            email: new FormControl('', [Validators.required, Validators.email]),
            passWord: new FormControl('', [Validators.required])
        });
    }

    submit() {
        this.showProgress.emit(true);
        const value = this.loginGroup.value;
        this.authService.signIn(value.email, value.passWord).then(result => {
            this.showProgress.emit(false);
            this.router.navigate([ROUTES.MAIN]);
        }).catch(error => {
            if (error.code) {
                this.showProgress.emit(false);
                this.invalidUser = true;
            }
        });
    }

    loginWithGoogle() {
        this.showProgress.emit(true);
        this.authService.signInWithGoogle().then(result => {
            const users = this.afs.list('users');
            users.valueChanges().subscribe(existingUsers => {
                const user = <any>existingUsers;
                if (!user.find((existingUser: { email: any; }) => existingUser.email === result.user.email)) {
                    users.push({ email: result.user.email, userName: result.user.displayName, profilePic: result.user.photoURL });
                }
            });
            this.router.navigate([ROUTES.MAIN]);
        }).catch(error => {
            this.showProgress.emit(false);
            this.invalidUser = true;
        });
    }

    loginWithFacebook() { }

    loginWithInstagram() { }

    loginWithTwitter() { }

    register() {
        DataService.showLogin.emit(false);
    }

    forgetPassword() {
        if (this.loginGroup.value.email) {
            this.authService.resetPassword(this.loginGroup.value.email).then(result => {
                this.matSnackBar.open('', 'Reset Password link has been sent.', { duration: 3000 });
            });
        }
    }
}
