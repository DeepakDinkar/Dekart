import { Observable } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FirebaseStorageService {
    constructor(private storage: AngularFireStorage) {}

    getStorageData(path: string): Observable<any> {
        return this.storage.ref(path).getDownloadURL();
    }
}
