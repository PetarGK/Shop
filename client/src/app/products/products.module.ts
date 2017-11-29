import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsService } from './products.service';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [ProductsListComponent, ProductComponent],
  providers: [ProductsService]
})
export class ProductsModule { }
