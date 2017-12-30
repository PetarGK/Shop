import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsService } from './products.service';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';
import { ProductsEffects } from './products-effects';
import { products } from './products.reducer';


@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature('products', products),
    EffectsModule.forFeature([ProductsEffects])
  ],
  declarations: [ProductsListComponent, ProductComponent, ProductDetailsComponent],
  providers: [ProductsService]
})
export class ProductsModule { }
