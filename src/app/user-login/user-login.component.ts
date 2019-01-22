import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
    loginGroup: FormGroup;
    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private matSnackBar: MatSnackBar
    ) {}

    ngOnInit() {
        this.loginGroup = this.formBuilder.group({
            email: new FormControl('', [Validators.required, Validators.email]),
            passWord: new FormControl('', [Validators.required])
        });
    }

    submit() {
        const value = this.loginGroup.value;
        this.authService.signIn(value.email, value.passWord).then(result =>{
            this.router.navigate(['/home']);
        });
    }

    loginWithGoogle() {
        this.authService.signInWithGoogle();
    }

    loginWithFacebook() {}

    loginWithInstagram() {}

    loginWithTwitter() {}

    register() {
        DataService.showLogin.emit(false);
    }

    forgetPassword() {
        if (this.loginGroup.value.email) {
            this.authService.resetPassword(this.loginGroup.value.email).then(result => {
                this.matSnackBar.open('', 'Reset Password link has been sent.', {duration: 3000});
            });
        }
    }
}
