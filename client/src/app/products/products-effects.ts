import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { ProductsService } from './products.service';
import { Store } from '@ngrx/store';
import { AppState } from '../core/store/app.state';
import * as Products from './products.actions';

@Injectable()
export class ProductsEffects {
    constructor(private actions$: Actions,
                private productsService: ProductsService,
                private store: Store<AppState>)  { }

@Effect()
getProducts$ = this.actions$.ofType<Products.GetProducts>(Products.GET_PRODUCTS)
                            .switchMap(action => this.productsService.getProducts())
                            .map(products => new Products.GetProductsSuccess(products));
}
