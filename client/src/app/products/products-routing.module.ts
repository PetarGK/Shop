import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: 'details/:product-id',
    component: ProductDetailsComponent,
    outlet: 'productPopup'
  },  
  {
    path: '',
    component: ProductsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
