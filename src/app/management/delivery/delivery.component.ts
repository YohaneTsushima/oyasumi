import { Component } from '@angular/core';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [
    NzImageModule,
    NzTabsModule
  ],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.scss'
})
export class DeliveryComponent {

}
