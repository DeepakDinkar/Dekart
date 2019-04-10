import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FirebaseDatabaseService {
    constructor(private database: AngularFireDatabase) {}

    getData(path: string): Observable<any[]> {
        return this.database.list(path).valueChanges();
    }

    getDataByChild(path: string, filterPath: string, filterValue: string) {
        return this.database
            .list(path, ref =>
                ref.orderByChild(filterPath).equalTo(filterValue)
            )
            .valueChanges();
    }
}
