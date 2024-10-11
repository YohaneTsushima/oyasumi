import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { OrderingComponent } from './ordering/ordering.component';
import { DeliveryComponent } from './delivery/delivery.component';

const routes: Routes = [{
  path: '',
  children: [
    {path: 'payment', component: PaymentComponent},
    {path: 'ordering', component: OrderingComponent},
    {path: 'delivery', component: DeliveryComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
