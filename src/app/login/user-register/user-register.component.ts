import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from 'src/app/core/auth.service';
import { ROUTES } from 'src/app/app-route.constants';
import { LoginComponent } from '../login.component';

@Component({
    selector: 'app-user-register',
    templateUrl: './user-register.component.html',
    styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
    registerGroup: FormGroup;
    isRegisterFail: boolean;
    @Output() showProgress = new EventEmitter<boolean>();

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private afs: AngularFireDatabase
    ) { }

    ngOnInit() {
        this.registerGroup = this.formBuilder.group({
            userName: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            passWord: new FormControl('', [Validators.required]),
            re_enterPassword: new FormControl('', [Validators.required, this.validateReEnterPassword])
        });
    }

    login() {
        LoginComponent.loginEmitter.emit(true);
    }

    private validateReEnterPassword(control: AbstractControl) {
        if (control.dirty) {
            const passWord = control.parent.get('passWord');
            if (passWord.value !== control.value) {
                return { validate: true };
            }
        }
        return null;
    }

    register() {
        this.showProgress.emit(true);
        const register = this.registerGroup.value;
        this.authService.signUp(register.email, register.passWord).then(result => {
            sessionStorage.setItem('userId', result.user.uid);
            console.log(result.user.uid);
            const value = this.afs.list('users');
            value.push({ email: register.email, userName: register.userName, profilePic: '' });
            this.showProgress.emit(false);
            this.router.navigate([ROUTES.MAIN]);
        }).catch(error => {
            this.isRegisterFail = true;
        });
    }
}
