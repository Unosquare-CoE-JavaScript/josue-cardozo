import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  KEY: string = 'AIzaSyCPXUEKgV2ZYaO8pKGwJakoyNI9cS634ME';
  PATH: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.KEY}`;
  PATH2: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.KEY}`;
  private tokenExpirationTimer: any;

  constructor(
    private store: Store<fromApp.AppState>
    ) { }


  setLogoutTimer(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.store.dispatch(new AuthActions.Logout());
    }, expirationDuration);
  }

  clearLogoutTimer() {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }
}
