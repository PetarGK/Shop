import { Action } from '@ngrx/store';
import { Product } from './product';

export const GET_PRODUCTS = '[Products] Get Products';
export const GET_PRODUCTS_SUCCESS = '[Products] Products Received';

export class GetProducts implements Action {
    readonly type = GET_PRODUCTS;
}

export class GetProductsSuccess implements Action {
    readonly type = GET_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]) {
    }
}

export type All = 
    GetProducts | 
    GetProductsSuccess;