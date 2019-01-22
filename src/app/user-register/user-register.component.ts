import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { DataService } from '../data.service';

@Component({
    selector: 'app-user-register',
    templateUrl: './user-register.component.html',
    styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
    registerGroup: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.registerGroup = this.formBuilder.group({
            userName: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            passWord: new FormControl('', [Validators.required]),
            re_enterPassword: new FormControl('', [
                Validators.required,
                this.validateReEnterPassword
            ])
        });
    }

    login() {
        DataService.showLogin.emit(true);
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
        const register = this.registerGroup.value;
        this.authService.signUp(register.email, register.passWord);
    }
}
