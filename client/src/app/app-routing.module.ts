import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
  },
  { 
      path: '**', 
      component: PageNotFoundComponent 
  }
];

@NgModule({
  declarations: [
        PageNotFoundComponent
  ],    
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
