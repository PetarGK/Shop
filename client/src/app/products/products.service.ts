import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from './product';
import { environment } from '../../environments/environment';
import { PRODUCTS } from './mock-products';

@Injectable()
export class ProductsService {

  private productsUrl = 'api/products';  // URL to web api

  constructor(private http: HttpClient) { }

  getProducts (): Observable<Product[]> {
    // return this.http.get<Product[]>(this.productsUrl);
    // return of(PRODUCTS);

    return this.http.get<Product[]>(`https://${environment.apiPath}/${environment.env}/products`);
  }

}
