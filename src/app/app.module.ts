import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { SuperTableModule } from 'ngx-super-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SupertableComponent } from './components/supertable/supertable.component';
import { TableComponent } from './components/table/table.component';
// import { InstrumentComponent } from './components/supertable/instrument.component';


//Modules
import { BootstrapModule} from './modules/bootstrap.module';
import { Approute } from './modules/router.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SupertableComponent,
    TableComponent,
    // InstrumentComponent
  ],
  imports: [
    BrowserModule,
    BootstrapModule,
    AngularFontAwesomeModule,
    SuperTableModule,
    NgxDatatableModule,
    RouterModule.forRoot(Approute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
