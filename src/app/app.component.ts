import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BtnComponent } from './btn/btn.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { FormsModule} from '@angular/forms';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterModule,
    NzButtonModule, 
    BtnComponent, 
    NzLayoutModule, 
    NzBreadCrumbModule, 
    NzMenuModule, 
    NzSwitchModule,
    FormsModule,
    NzImageModule,
    NzIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'oyasumi';
  theme = false;
  mode: boolean = false;
  dark: boolean = true;

  ngOnInit(): void {
    console.log('');
  }
  ngOnDestroy(): void {
    console.log('');
  } 
}


