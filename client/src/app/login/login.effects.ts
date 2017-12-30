import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/fromPromise';
import { CognitoService } from '../core/cognito.service';
import { Store } from '@ngrx/store';
import { AppState } from '../core/store/app.state';
import * as LoginActions from './login.actions';
import { Observable } from 'rxjs/Observable';
import { CognitoResult } from '../core/cognito.result';

@Injectable()
export class LoginEffects {
    constructor(private actions$: Actions,
                private cognitoService: CognitoService,
                private store: Store<AppState>)  { }

@Effect()
loginUser$ = this.actions$.ofType<LoginActions.LoginUser>(LoginActions.LOGIN_USER)
                          .switchMap(action => {
                            return  Observable.fromPromise(this.cognitoService.authenticateUser(action.userName, action.password));
                           })
                          .map(result => {
                            if (result.token) {
                                return new LoginActions.LoginUserSuccess(result.token);
                            } else if (result.error) {
                                return new LoginActions.LoginUserError(result.error);
                            }
                          });
}
