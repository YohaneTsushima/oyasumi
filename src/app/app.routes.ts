import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadChildren: () => import('./app.module').then(p => p.AppModule)
  }, {
    path: 'management',
    loadChildren: () => import('./management/management.module').then(p => p.ManagementModule)
}];

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
  export class AppRoutingModule { }