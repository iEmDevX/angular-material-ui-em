import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { ComponentsModule } from './components/components.module';
import { AjaxService } from './services/ajax.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxLoadingModule } from 'ngx-loading';
import { Globals } from './commons/globals';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    ComponentsModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    FontAwesomeModule,
  ],
  providers: [
    AjaxService,
    Globals,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
