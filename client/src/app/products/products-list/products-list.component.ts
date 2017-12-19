import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { ProductsState } from '../products.state';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/store/app.state';
import * as ProductsActions from '../products.actions';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {
  public productsState$: Observable<ProductsState>;

  constructor(private store: Store<AppState>) {
    this.productsState$ = this.store.select('products').share();
  }

  ngOnInit() {
    this.store.dispatch(new ProductsActions.GetProducts());
  }

  onEditProduct(event): void {

  }
}
