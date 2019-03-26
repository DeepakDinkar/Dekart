import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

@Injectable({
    providedIn: "root"
})
export class AuthService {
    constructor(private fireBaseAuth: AngularFireAuth) { }

    signInWithFacebook() { }

    signInWithTwitter() { }

    signInWithInstagram() { }

    async signIn(email: string, password: string): Promise<any> {
        const result = await this.fireBaseAuth.auth.signInWithEmailAndPassword(email, password);
        console.log(result);
        return result;
    }

    async signInWithGoogle(): Promise<any> {
        const result = await this.fireBaseAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
        console.log(result);
        return result;
    }

    async signUp(email: string, password: string): Promise<any> {
        const result = await this.fireBaseAuth.auth.createUserWithEmailAndPassword(email, password);
        console.log(result);
        return result;
    }

    async signOut(): Promise<any> {
        const result = await this.fireBaseAuth.auth.signOut();
        console.log(result);
        return result;
    }

    async resetPassword(email: string): Promise<any> {
        const result = await this.fireBaseAuth.auth.sendPasswordResetEmail(email);
        return result;
    }

    getLoggedUserDetails() {
        return this.fireBaseAuth.auth.onAuthStateChanged(user => {
            console.log(user);
            return user;
        });
    }
}
