import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { AuthGuardService as AuthGuard } from '../core/auth-guard.service';

const routes: Routes = [{
  path: '', component: OrdersListComponent, canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
