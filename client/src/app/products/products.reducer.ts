import { ProductsState } from './products.state';
import * as Products from './products.actions';

let initialState = {
    products: null
};

export function products(state: ProductsState = initialState, action: Products.All): ProductsState {
    switch (action.type) {
        case Products.GET_PRODUCTS:
            return { ...state };
        case Products.GET_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload };            
        default:
            return state;
    }
}