import { AngularFirebaseModule } from './angular-firebase.module';

describe('AngularFirebaseModule', () => {
  let angularFirebaseModule: AngularFirebaseModule;

  beforeEach(() => {
    angularFirebaseModule = new AngularFirebaseModule();
  });

  it('should create an instance', () => {
    expect(angularFirebaseModule).toBeTruthy();
  });
});
