import { NgModule } from '@angular/core';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';

@NgModule({
  declarations: [
    
  ],
  imports: [
    
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN}
  ],
  bootstrap: []
})
export class AppModule { }
