import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsService } from './products.service';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [ProductsListComponent, ProductComponent, ProductDetailsComponent],
  providers: [ProductsService]
})
export class ProductsModule { }
