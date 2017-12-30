import { Action } from '@ngrx/store';

export const LOGIN_USER = '[Login] Login User';
export const LOGIN_USER_SUCCESS = '[Login] User authenticated';
export const LOGIN_USER_ERROR = '[Login] User not authenticated';

export class LoginUser implements Action {
    readonly type = LOGIN_USER;
    constructor(public userName: string, public password: string) {
    }
}

export class LoginUserSuccess implements Action {
    readonly type = LOGIN_USER_SUCCESS;
    constructor(public token: string) {
    }
}

export class LoginUserError implements Action {
    readonly type = LOGIN_USER_ERROR;
    constructor(public error: any) {
    }
}

export type All =
    LoginUser |
    LoginUserSuccess |
    LoginUserError;
