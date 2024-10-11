import { Component } from '@angular/core';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-ordering',
  standalone: true,
  imports: [
    NzImageModule,
    NzTabsModule
  ],
  templateUrl: './ordering.component.html',
  styleUrl: './ordering.component.scss'
})
export class OrderingComponent {

}
