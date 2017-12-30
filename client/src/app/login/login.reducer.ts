import { LoginState } from './login.state';
import * as LoginActions from './login.actions';

const initialState = {
    isAuthenticated: false
};

export function login(state: LoginState = initialState, action: LoginActions.All): LoginState {
    switch (action.type) {
        case LoginActions.LOGIN_USER:
            return { ...state };
        case LoginActions.LOGIN_USER_SUCCESS:
            return { ...state, isAuthenticated: true };
        case LoginActions.LOGIN_USER_ERROR:
            return { ...state, isAuthenticated: false };
        default:
            return state;
    }
}
