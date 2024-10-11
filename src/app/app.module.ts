import { NgModule } from '@angular/core';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';

const ngZorroConfig: NzConfig = {
  // 注意组件名称没有 nz 前缀
  theme: {
    primaryColor: '#1890ff'
  }
};

@NgModule({
  declarations: [
    
  ],
  imports: [
    
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN},
    { provide: NZ_CONFIG, useValue:  ngZorroConfig  }
  ],
  bootstrap: []
})
export class AppModule { }
