import { ProductsState } from '../../products/products.state';
import { LoginState } from '../../login/login.state';

export interface AppState {
    products: ProductsState;
    login: LoginState;

}
