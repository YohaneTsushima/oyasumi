import { NgModule, OnDestroy, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./app.module').then(p => p.AppModule)
  }, {
    path: 'management',
    loadChildren: () => import('./management/management.module').then(p => p.ManagementModule)
  }, {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(p => p.LoginModule)
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
      useHash: true,
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload'
    })],
    exports: [RouterModule]
  })
  export class AppRoutingModule implements OnInit, OnDestroy {

    ngOnInit(): void {
      debugger
      console.log('你好.');
      
    }
    ngOnDestroy(): void {
      console.log('');
    } 

  }