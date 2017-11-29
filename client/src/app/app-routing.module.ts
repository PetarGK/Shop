import { NgModule } from '@angular/core';
import {PreloadAllModules, Routes,  RouterModule} from '@angular/router';

const routes: Routes = [
  {
      path: 'products',
      loadChildren: './products/products.module#ProductsModule',
  },
  {
      path: 'orders',
      loadChildren: './orders/orders.module#OrdersModule',
  },
  {
      path: '',
      pathMatch: 'full',
      redirectTo: '/products'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
