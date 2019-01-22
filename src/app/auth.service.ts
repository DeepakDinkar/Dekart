import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

@Injectable({
    providedIn: "root"
})
export class AuthService {
    constructor(private fireBaseAuth: AngularFireAuth) {}

    signInWithFacebook() {}

    signInWithTwitter() {}

    signInWithInstagram() {}

    async signIn(email: string, password: string): Promise<any> {
        const result = await this.fireBaseAuth.auth
            .signInWithEmailAndPassword(email, password);
        console.log(result);
        return result;
    }

    signInWithGoogle() {
        this.fireBaseAuth.auth
            .signInWithPopup(new auth.GoogleAuthProvider())
            .then(result => {
                console.log(result);
            });
    }

    signUp(email: string, password: string) {
        this.fireBaseAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(result => {
                console.log(result);
            });
    }

    signOut() {
        this.fireBaseAuth.auth.signOut();
    }

    async resetPassword(email: string): Promise<any> {
        const result = await this.fireBaseAuth.auth.sendPasswordResetEmail(email);
        return result;
    }

    getLoggedUserDetails() {
        this.fireBaseAuth.auth.onAuthStateChanged(user => {
            console.log(user);
        });
    }
}
