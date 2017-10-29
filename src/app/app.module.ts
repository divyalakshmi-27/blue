import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BootstrapModule} from './modules/bootstrap.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
/*import { AppRoutingModule } from './modules/router.module';*/
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SuperTableModule } from 'ngx-super-table';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BootstrapModule,
    AngularFontAwesomeModule,
    SuperTableModule,
    /*AppRoutingModule,*/
    RouterModule.forRoot([
      {
        path: 'header',
        component: HeaderComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
