import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersService } from './orders.service';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  declarations: [OrdersListComponent, OrderComponent],
  providers: [OrdersService]
})
export class OrdersModule { }
