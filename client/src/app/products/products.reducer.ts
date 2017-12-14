import { ProductsState } from './products.state';
import * as Products from './products.actions';

let initialState = {
    products: null
};

export function products(state: ProductsState = initialState, action: Products.All): ProductsState {
    switch (action.type) {
        case Products.GET_PRODUCTS:
            return { ...state };
        default:
            return state;
    }
}