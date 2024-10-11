import { Component } from '@angular/core';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    NzImageModule,
    NzTabsModule
  ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

}
