import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BtnComponent } from './btn/btn.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NgModel } from '@angular/forms';
import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NzButtonModule, 
    BtnComponent, 
    NzLayoutModule, 
    NzBreadCrumbModule, 
    NzMenuModule, 
    NzSwitchModule,
    NzImageModule
  ],
  providers: [NgModel],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'oyasumi';
  theme = false;
}
