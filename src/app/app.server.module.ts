import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

let NODEJS_PORT = 4200;

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers:[
    {
      provide: 'serverUrl',
      useValue: `http://localhost:${NODEJS_PORT}`
    },
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
